import './CardsSuggestion.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { products } from '../data/products';
import leaf from '../assets/leaf.png';

const CardsSuggestion = () => {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (item, event) => {
    event.preventDefault(); // Prevent navigating to the product page
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, qty: 1 },
    });
    navigate('/shopping-cart');
  };

  const handleMoreDetails = (itemId, event) => {
    event.preventDefault(); // Prevent navigating to the product page
    navigate(`/products/${itemId}`);
  };

  return (
    <section className="cards-suggestion-section">
      <div className="title-container">
        <img src={leaf} alt="Leaf Decoration" className="title-leaf title-leaf-left" />
        <div className="parent-container">
          <h1>IF YOU LIKE THOSE</h1>
          <h2>You might love these</h2>
        </div>
        <img src={leaf} alt="Leaf Decoration" className="title-leaf title-leaf-right" />
      </div>

      <div className="cards-grid">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/products/${product.id}`} className="card-link">
              <img src={product.image} alt={product.name} className="card-image" />
              <div className="card-content">
                <h4>{product.name}</h4>
                <p>{product.category}</p>
                <p>{product.price}€</p>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  <FaShoppingCart /> Add to cart
                </button>
                <button
                  className="more-details-btn"
                  onClick={(e) => handleMoreDetails(product.id, e)}
                >
                  <FaPlus /> More details
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardsSuggestion;