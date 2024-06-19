// src/Pages/ShopPage.jsx

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MovingCards from '../Components/MovingCards';
import Subscription from '../Components/Subscription';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import '../Components/ProductCard.css';
import '../Pages/ShopPage.css';

// The main component for the shop page
const ShopPage = () => {
  // Retrieve the category parameter from the URL
  const { category } = useParams();

  // State to manage the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // State to manage the price range filter set by the user
  const [priceRange, setPriceRange] = useState(100);

  // Function to handle changes in the search input
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Function to handle changes in the price range slider
  const handlePriceChange = (price) => {
    setPriceRange(price);
  };

  // Filter the products based on the selected category, search term, and price range
  const filteredProducts = products.filter((product) => {
    // Check if the product matches the selected category
    const matchesCategory = category === 'all' || product.category.toLowerCase() === category.toLowerCase();
    
    // Check if the product name includes the search term
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check if the product price is within the selected price range
    const matchesPrice = product.price <= priceRange;

    // Return true if the product matches all criteria
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="shop-page">
      {/* Navbar component for navigation */}
      <Navbar />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar component for filtering options */}
        <Sidebar onSearchChange={handleSearchChange} onPriceChange={handlePriceChange} />

        <div className="flex-1 p-4">
          {/* Grid to display filtered products using the ProductCard component */}
          <div className="cards-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              // ProductCard component to display individual product details
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* MovingCards component for additional product displays */}
      <MovingCards />
      
      {/* Subscription component for email subscription section */}
      <Subscription />
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default ShopPage;