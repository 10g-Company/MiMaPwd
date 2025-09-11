import React, { useEffect, useState } from "react";
import './Warning.css';
import { TiWarning } from "react-icons/ti";

const Warning = ({ id, children }) => {

    return (
        <>
            <div id={id} className="warning-container">

                <div className="warning-icon-container">
                    <TiWarning className="react-icons" />Warning:
                </div>

                <div className="warning-child">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Warning;