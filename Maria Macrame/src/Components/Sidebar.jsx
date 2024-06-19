// src/components/Sidebar.jsx
import { useState } from 'react'; // Importing useState hook from React
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation
import { categories } from '../data/products'; // Importing categories data from products
import './Sidebar.css'; // Importing CSS for Sidebar component
import PropTypes from 'prop-types'; // Importing PropTypes for type checking

const Sidebar = ({ onSearchChange, onPriceChange }) => {
  // State variables for managing search term and price range
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(100);

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update the search term state
    onSearchChange(value); // Call the parent component's onSearchChange function
  };

  // Function to handle changes in the price range input
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(value); // Update the price range state
    onPriceChange(value); // Call the parent component's onPriceChange function
  };

  return (
    <div className="sidebar bg-teal-900 text-white p-4">
      {/* Search bar */}
      <div className="search-bar mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full px-4 py-2 border border-lime-400 rounded focus:outline-none"
        />
      </div>
      {/* Price filter */}
      <div className="price-filter mb-4">
        <label className="block mb-2">Filter by price:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>0€</span>
          <span>{priceRange}€</span>
        </div>
      </div>
      {/* Categories list */}
      <h3 className="text-lime-400 mb-4">Categories</h3>
      <ul className="sidebar-list">
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

// PropTypes for type checking
Sidebar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
};

export default Sidebar;

/*
Explanation:

1. Imports:
   - `useState`: Hook to manage component state.
   - `Link`: Component for navigation.
   - `categories`: Data for the categories to be displayed in the sidebar.
   - `PropTypes`: For type checking the props passed to the component.
   - CSS file for styling.

2. Sidebar Component:
   - Manages local state for search term and price range using `useState`.
   - `handleSearchChange`: Updates the search term state and calls the parent component's `onSearchChange` function.
   - `handlePriceChange`: Updates the price range state and calls the parent component's `onPriceChange` function.

3. Render:
   - Renders a search bar that calls `handleSearchChange` on input change.
   - Renders a price filter slider that calls `handlePriceChange` on input change.
   - Renders a list of categories with navigation links.
   - Uses CSS classes for styling.

4. PropTypes:
   - Ensures that `onSearchChange` and `onPriceChange` props are functions and are required.
*/