import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { wines } from '../data/wines';
import './WineDetail.css';

const WineDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const wine = wines.find(w => w.id === parseInt(id));

  if (!wine) {
    return <div>Wine not found</div>;
  }

  return (
    <div className="wine-detail">
      <Header />
      <div className="wine-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <div className="wine-detail-content">
          <div className="wine-image">
            <img src={wine.image} alt={wine.name} />
          </div>
          <div className="wine-info">
            <h1>{wine.name}</h1>
            <p className="producer">{wine.producer}</p>
            <p className="origin">{wine.country}, {wine.region}</p>
            <p className="type">{wine.type}</p>
            
            <div className="wine-description">
              <h2>What is special about this wine?</h2>
              <p>{wine.description}</p>
            </div>
            
            <div className="wine-taste">
              <h2>How the wine tastes?</h2>
              <p>{wine.taste}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDetail;