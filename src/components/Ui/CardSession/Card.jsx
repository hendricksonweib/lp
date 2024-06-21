import React from 'react';

const Card = ({ title, link }) => {
    const getImageUrl = (url) => {
        return `https://api.linkpreview.net/?key=YOUR_API_KEY&q=${url}`;
    };

    return (
        <div className="card" onClick={() => window.open(link, "_blank")}>
            <img src={getImageUrl(link)} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
