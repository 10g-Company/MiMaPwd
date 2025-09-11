import React, { useEffect, useState } from "react";
import './Note.css';
import { FaInfoCircle } from "react-icons/fa";

const Note = ({ id, children }) => {
    
    return (
        <>
            <div id={id} className="note-container">

                <div className="note-icon-container">
                    <FaInfoCircle className="react-icons" />NOTE:
                </div>

                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Note;