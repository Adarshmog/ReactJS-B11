import React from "react";
import { ImageCard } from "./ImageCard"
import { portfolioImagesData } from "../../utils/Constants";
import "./ImageContainer.css"


export function ImageContainer() {
    return (
        <div className="imageContainer">
            {portfolioImagesData.map((image, index) => (
                <ImageCard imageUrl={image.imageLink} index={index} />
            ))}
        </div>
    );
};
