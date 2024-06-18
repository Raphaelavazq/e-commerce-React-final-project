// src/components/Sidebar.jsx
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { categories } from '../data/products';
import './Sidebar.css';

const Sidebar = ({ onSearchChange, onPriceChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(100);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(value);
    onPriceChange(value);
  };

  return (
    <div className="sidebar bg-teal-900 text-white p-4">
      <div className="search-bar mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 w-full rounded text-black"
        />
      </div>
      <div className="price-filter mb-4">
        <label className="block mb-2">Filter by price:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full"
          style={{ accentColor: '#65a20d' }} // Change the color of the slider thumb
        />
        <div className="flex justify-between">
          <span>0€</span>
          <span>{priceRange}€</span>
        </div>
      </div>
      <h3 className="text-lime-400 mb-4">Categories</h3>
      <ul className="sidebar-list mb-4">
        {categories.map((category) => (
          <li key={category.name} className="sidebar-item">
            <Link to={category.href} className="sidebar-link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};

export default Sidebar;