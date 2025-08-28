import React from 'react';
import './SmartphoneFrame.css';

const SmartphoneFrame = ({ media, height }) => {
    const renderMedia = () => {
        if (media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg')) {
            return <video src={media} autoPlay loop muted playsInline className="smartphone-media" />;
        } else {
            return <img src={media} alt="Displayed content" className="smartphone-media" />;
        }
    };

    return (
        <div className="smartphone-container" style={{ height: height }}>
            <div className="smartphone-frame">
                <div className="smartphone-notch-pill"></div>

                {/*<div className="smartphone-volume-up"></div>*/}
                {/*<div className="smartphone-volume-down"></div>*/}
                {/*<div className="smartphone-power-button"></div>*/}

                <div className="smartphone-screen">
                    {renderMedia()}
                </div>
            </div>
        </div>
    );
};

export default SmartphoneFrame;