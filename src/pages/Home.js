import React, { useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import WineCard from '../components/WineCard';
import { wines, countries, sortOptions } from '../data/wines';
import './Home.css';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Title (A-Z)');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  // Filtrar vinhos por país
  const filteredWines = selectedCountry === 'All' 
    ? wines 
    : wines.filter(wine => wine.country === selectedCountry);

  // Ordenar vinhos
  const sortedWines = [...filteredWines].sort((a, b) => {
    if (selectedSort === 'Title (A-Z)') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="home">
      <Header />
      <Filter 
        countries={countries}
        sortOptions={sortOptions}
        onCountryChange={handleCountryChange}
        onSortChange={handleSortChange}
      />
      <div className="wines-container">
        {sortedWines.map(wine => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default Home;