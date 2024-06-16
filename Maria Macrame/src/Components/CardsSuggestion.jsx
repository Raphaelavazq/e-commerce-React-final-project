import './CardsSuggestion.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import leaf from '../assets/leaf.png';

const items = [
  { id: 1, title: 'Spider Plant', price: 25, category: 'Outdoor', image: product1 },
  { id: 2, title: 'Spider Plant', price: 25, category: 'Outdoor', image: product2 },
  { id: 3, title: 'Spider Plant', price: 25, category: 'Outdoor', image: product1 },
  { id: 4, title: 'Spider Plant', price: 25, category: 'Outdoor', image: product2 },
  { id: 5, title: 'Spider Plant', price: 25, category: 'Outdoor', image: product1 },
  { id: 6, title: 'Spider Plant', price: 25, category: 'Outdoor', image: product2 },
];

const CardsSuggestion = () => {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, qty: 1 },
    });
    navigate('/shopping-cart');
  };

  const handleMoreDetails = (itemId) => {
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
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/products/${item.id}`} className="card-link">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h4>{item.title}</h4>
                <p>{item.category}</p>
                <p>{item.price}€</p>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigating to the product page
                    handleAddToCart(item);
                  }}
                >
                  <FaShoppingCart /> Add to cart
                </button>
                <button
                  className="more-details-btn"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigating to the product page
                    handleMoreDetails(item.id);
                  }}
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