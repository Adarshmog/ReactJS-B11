import React, { useState } from 'react';
import "./ImageCard.css"

export const ImageCard = ({ imageUrl, index }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleMouseEnter = () => {
        setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        setShowOverlay(false);
    };

    return (
        <div className="imageCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className="img-style img-fluid" src={imageUrl} alt="images" />
            {showOverlay && (
                <div className="image-overlay">
                </div>
            )}
        </div>
    );
};
