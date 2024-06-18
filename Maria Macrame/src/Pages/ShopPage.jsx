import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MovingCards from '../Components/MovingCards';
import Subscription from '../Components/Subscription';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import '../Components/ProductCard.css';
import '../Pages/ShopPage.css';

const ShopPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(100);

  const formattedCategory = category.replace('-', ' ').toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = formattedCategory === 'all' || product.category.toLowerCase() === formattedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="shop-page">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar
          onSearchChange={setSearchTerm}
          onPriceChange={setPriceRange}
        />
        <div className="flex-1 p-4">
          <div className="cards-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <MovingCards />
      <Subscription />
      <Footer />
    </div>
  );
};

export default ShopPage;