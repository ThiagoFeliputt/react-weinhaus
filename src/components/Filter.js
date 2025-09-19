import React from 'react';
import './Filter.css';

const Filter = ({ countries, sortOptions, onCountryChange, onSortChange }) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="country">Herkunftsland:</label>
        <select id="country" onChange={(e) => onCountryChange(e.target.value)}>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={(e) => onSortChange(e.target.value)}>
          {sortOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;