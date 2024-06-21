// Importing necessary libraries and components
import PropTypes from 'prop-types'; // For type-checking props
import { Link } from 'react-router-dom'; // For navigation links
import { motion } from 'framer-motion'; // For animations
import { FaShoppingCart } from 'react-icons/fa'; // For cart icon

// ProductCard component definition
const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }} // Slightly enlarges the card on hover for a subtle animation effect
      whileTap={{ scale: 0.95 }} // Slightly shrinks the card on tap for a subtle animation effect
    >
      <Link to={`/products/${product.id}`} className="card-link">
        {/* Image of the product */}
        <img src={product.image} alt={product.name} className="card-image" />
        
        {/* Content of the card including product name, description, price, and buttons */}
        <div className="card-content">
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p className="text-green-500 font-bold">{product.price}€</p>
          
          {/* Button to add the product to the cart */}
          <button className="add-to-cart-btn">
            <FaShoppingCart /> Add to cart
          </button>

          {/* Link to the product details page */}
          <Link to={`/products/${product.id}`} className="more-details-btn">
            More details
          </Link>
        </div>
      </Link>
    </motion.div>
  );
};

// Prop types for the ProductCard component to ensure proper usage
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired, // Product ID, required and must be a number
    name: PropTypes.string.isRequired, // Product name, required and must be a string
    category: PropTypes.string.isRequired, // Product category, required and must be a string
    price: PropTypes.number.isRequired, // Product price, required and must be a number
    description: PropTypes.string.isRequired, // Product description, required and must be a string
    image: PropTypes.string.isRequired, // Product image URL, required and must be a string
  }).isRequired,
};

// Exporting the ProductCard component for use in other parts of the application
export default ProductCard;

/*
Explanation:

1. **Imports**:
   - `PropTypes` for type-checking props to ensure correct prop usage.
   - `Link` from `react-router-dom` for navigation within the app.
   - `motion` from `framer-motion` to add animations to the component.
   - `FaShoppingCart` from `react-icons` to display a shopping cart icon.

2. **ProductCard Component**:
   - The `ProductCard` component receives a `product` prop and displays its details.
   - Uses `motion.div` for the main card container to add hover and tap animations.
   - Contains a `Link` to navigate to the product details page.
   - Displays the product image, name, description, price, and buttons for adding to cart and viewing more details.

3. **PropTypes**:
   - Ensures the `product` prop is an object with specific properties (`id`, `name`, `category`, `price`, `description`, `image`) and their respective types.
   - All properties are required to ensure the component receives all necessary data.

4. **Export**:
   - The `ProductCard` component is exported as the default export for use in other parts of the application.
*/