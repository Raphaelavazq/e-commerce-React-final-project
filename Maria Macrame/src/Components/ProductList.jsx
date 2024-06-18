// src/components/ProductCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/products/${product.id}`} className="card-link">
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-content">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p className="text-green-500 font-bold">{product.price}€</p>
          <button className="add-to-cart-btn">
            <FaShoppingCart /> Add to cart
          </button>
          <Link to={`/products/${product.id}`} className="more-details-btn">
            More details
          </Link>
        </div>
      </Link>
    </motion.div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;