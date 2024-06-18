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

const ShopPage = () => {
  const { category } = useParams();

  const filteredProducts = category === 'all'
    ? products
    : products.filter((product) => product.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="shop-page">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
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