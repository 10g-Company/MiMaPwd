// src/contexts/PopupContext.jsx
import React, { createContext, useState, useContext } from 'react';
import Popup from '../components/Popup/Popup';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [openPopupId, setOpenPopupId] = useState(null);
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (id, content) => {
        setOpenPopupId(id);
        setPopupContent(content);
    };

    const closePopup = () => {
        setOpenPopupId(null);
        setPopupContent(null);
    };

    const contextValue = {
        openPopup,
        closePopup,
        openPopupId,
    };

    return (
        <PopupContext.Provider value={contextValue}>
            {children}
            {openPopupId && (
                <Popup isOpen={true} onClose={closePopup}>
                    {popupContent}
                </Popup>
            )}
        </PopupContext.Provider>
    );
};