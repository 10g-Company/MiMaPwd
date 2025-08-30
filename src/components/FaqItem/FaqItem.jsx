import React, { useState } from "react";
import './FaqItem.css';
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqItem = ({id, question, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id={id} className="faq-item">
            {/* Entire question row is clickable */}
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? (
                    <FaMinus className="faq-icon" />
                ) : (
                    <FaPlus className="faq-icon" />
                )}
            </div>

            {isOpen && <div className="faq-answer">{children}</div>}
        </div>
    );
};

export default FaqItem;