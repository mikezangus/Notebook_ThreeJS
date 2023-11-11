import React from "react";

export default function DisplaySection({ triggerPreview }) {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant.</p>
            <span className="descript">
                A display that's up to 2x hotter than your mom
            </span>
            <button className="button" onClick={triggerPreview}>Try me</button>
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>
    );
};