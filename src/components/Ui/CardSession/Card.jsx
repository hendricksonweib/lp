import React from 'react';
import '../CardSession/CardContainer.css';

const Card = ({ title, link, image }) => {
    return (
        <div className="card" onClick={() => window.open(link, "_blank")}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
