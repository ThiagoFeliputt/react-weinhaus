import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WineCard.css';

const WineCard = ({ wine }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/wine/${wine.id}`);
  };

  return (
    <div className="wine-card" onClick={handleClick}>
      <div className="wine-image">
        <img src={wine.image} alt={wine.name} />
      </div>
      <div className="wine-info">
        <h3>{wine.name}</h3>
        <p className="producer">{wine.producer}</p>
        <p className="origin">{wine.country}, {wine.region}</p>
        <p className="type">{wine.type}</p>
      </div>
    </div>
  );
};

export default WineCard;