import React from "react";
import { ImageContainer } from "./ImageContainer";
import "./Portfolio.css"

export function Portfolio() {
    return (
        <>
            <h4 className="portfolio">PORTFOLIO</h4>
            <p className="portDescription">WHAT WE'VE DONE</p>
            <ImageContainer />
        </>
    );
};

