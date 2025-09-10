import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TutorialPage.css";

// import topics here...
import GetStarted from "./Topics/01GetStarted/GetStarted";
import Record from "./Topics/03Record/Record";
import VaultSetting from "./Topics/02AppSettings/VaultSetting";

// ?topic=id to link to the topic from other page

// TOC with sub-subtopics
const tocData = [
    {
        id: "get-started",
        title: "Get Started",
        component: GetStarted
    },
    {
        id: "app-settings", title: "App Settings",
        subtopics: [
            { id: "general", title: "General" },
            { id: "vault", title: "Vault", component: VaultSetting },
            { id: "data", title: "Data" },
            { id: "security", title: "Security" },
        ]
    },
    {
        id: "record", title: "Record", component: Record
    }
    //{
    //    id: "getting-started",
    //    title: "Getting Started",
    //    subtopics: [
    //        { id: "installation", label: "Installation", component: Installation },
    //        {
    //            id: "first-component",
    //            label: "First Component",
    //            subtopics: [
    //                { id: "functional-comp", label: "Functional Component", component: FirstComponent },
    //                { id: "class-comp", label: "Class Component", component: JSXBasics },
    //            ],
    //        },
    //    ],
    //},
];

// === Helpers ===
function findPath(items, targetId, path = []) {
    for (const item of items) {
        if (item.id === targetId) return [...path, item.id];
        if (item.subtopics) {
            const subPath = findPath(item.subtopics, targetId, [...path, item.id]);
            if (subPath.length) return subPath;
        }
    }
    return [];
}

function getItemById(items, targetId) {
    for (const item of items) {
        if (item.id === targetId) return item;
        if (item.subtopics) {
            const found = getItemById(item.subtopics, targetId);
            if (found) return found;
        }
    }
    return null;
}

// === Recursive TOC Renderer ===
function TocItem({ item, openTopics, activeId, handleClick, renderSubtopics }) {
    const isOpen = openTopics[item.id];
    const isActive = activeId === item.id;

    return (
        <li>
            <div
                className={`topic ${isActive ? "active" : ""}`}
                onClick={() => handleClick(item)}
            >
                <span>{item.title}</span>
                {item.subtopics && (
                    <span className="arrow">{isOpen ? "▼" : "▶"}</span>
                )}
            </div>
            {item.subtopics && isOpen && (
                <ul>{item.subtopics.map((sub) => renderSubtopics(sub))}</ul>
            )}
        </li>
    );
}

// === Main Tutorial Page ===
export default function TutorialPage() {

    // Expand all topics & subtopics by default
    const buildExpandedState = () => {
        const state = {};
        tocData.forEach((topic) => {
            state[topic.id] = true; // expand each top-level topic
            if (topic.subtopics) {
                topic.subtopics.forEach((sub) => {
                    state[sub.id] = true; // expand each subtopic too
                });
            }
        });
        return state;
    };

    const contentRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const lastHash = useRef('');

    //const [openTopics, setOpenTopics] = useState({}); // use this if want to collapse all by default
    const [openTopics, setOpenTopics] = useState(buildExpandedState);
    const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
    const [activeContent, setActiveContent] = useState(null);
    const [activeId, setActiveId] = useState(null);

    // Load from URL or fallback to default
    useEffect(() => {
        document.title = "MiMaPwd - Tutorial"

        const params = new URLSearchParams(location.search);
        let topicId = params.get("topic");

        if (!topicId) {
            topicId = "get-started"; // ✅ default topic
            navigate(`?topic=${topicId}`, { replace: true });
            return;
        }

        const path = findPath(tocData, topicId);
        if (path.length) {
            setOpenTopics((prev) => {
                const updated = { ...prev };
                path.forEach((pid) => (updated[pid] = true));
                return updated;
            });

            const targetItem = getItemById(tocData, topicId);
            if (targetItem?.component) {
                setActiveContent(() => targetItem.component);
                setActiveId(topicId);
            }
        }
    }, [location.search, navigate]);

    // Scroll to top when active topic changes and/or to the anchor if hash is present
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const topicId = params.get("topic");
        const hash = location.hash; // e.g. "#one"

        if (!topicId) return;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const header = document.querySelector("Header");
                const headerHeight = header ? header.offsetHeight : 0;

                if (hash) {
                    // Scroll to the anchor target
                    const target = document.querySelector(hash);
                    if (target) {
                        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        return;
                    }
                }

                // Fallback: scroll to the top of content
                const el = contentRef.current;
                if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({ top: y, behavior: "smooth" });
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            });
        });
    }, [location.search, location.hash]);

    // Handle TOC clicks
    const handleClick = (item) => {
        if (item.subtopics) {
            setOpenTopics((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
        } else {
            navigate(`?topic=${item.id}`); // ✅ update URL
            setIsMobileTocOpen(false);     // close sidebar on mobile
        }
    };

    const renderToc = (item) => (
        <TocItem
            key={item.id}
            item={item}
            openTopics={openTopics}
            activeId={activeId}
            handleClick={handleClick}
            renderSubtopics={renderToc}
        />
    );

    const Content = activeContent || (() => <div>Select a topic</div>);

    return (
        <>
            <div className="tutorial-page">
                {/* Mobile TOC toggle button */}
                <button
                    className="toc-toggle-btn"
                    onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                >
                    {isMobileTocOpen ? "Close TOC" : "Open TOC"}
                </button>

                {/* Sidebar TOC */}
                <aside className={`toc ${isMobileTocOpen ? "open" : ""}`}>
                    <h2>Table of Contents</h2>
                    <ul>{tocData.map(renderToc)}</ul>
                </aside>

                {/* Content Area */}
                <main className="content" ref={contentRef}>
                    <Content />
                </main>
            </div>
        </>
    );
}