import React, { useEffect, useState } from "react";
import './ArticleToc.css';

const ArticleToc = ({ topics }) => {

    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="article-container">
                <h2 className="text-2xl font-bold mb-4">In this article</h2>
                <ul className="bullet-list">
                    {topics.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                
                                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                                {item.topic}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ArticleToc;