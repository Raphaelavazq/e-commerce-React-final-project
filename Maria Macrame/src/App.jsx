// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import ProductDetails from '@pages/ProductDetails';
import About from '@pages/About';
import ShoppingCart from '@pages/ShoppingCart';
import LoginPage from '@pages/LoginPage'; // Import the LoginPage
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add this route */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;