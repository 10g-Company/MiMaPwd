// src/components/Popup.jsx
import React, { useEffect, useRef } from 'react';
import './Popup.css';

const Popup = ({ id, isOpen, onClose, children }) => {
    const popupRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content" ref={popupRef}>
                {children}
            </div>
        </div>
    );
};

export default Popup;