import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import ProductDetails from '@pages/ProductDetails';
import About from '@pages/About';
import ShoppingCart from '@pages/ShoppingCart';
import ShopPage from '@pages/ShopPage';
import LoginPage from '@pages/LoginPage';
import Checkout from '@pages/Checkout'; // Import the Checkout component
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;