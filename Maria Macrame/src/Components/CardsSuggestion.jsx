// Import necessary libraries and assets
import './CardsSuggestion.css'; // Importing the CSS file for styling
import { Link, useNavigate } from 'react-router-dom'; // Importing Link and useNavigate from react-router-dom for navigation
import { FaShoppingCart, FaPlus } from 'react-icons/fa'; // Importing icons from react-icons
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
import { useContext } from 'react'; // Importing useContext from React
import CartContext from '../context/CartContext'; // Importing CartContext for state management
import { products } from '../data/products'; // Importing product data
import leaf from '../assets/leaf.png'; // Importing leaf image

// CardsSuggestion component definition
const CardsSuggestion = () => {
  const { dispatch } = useContext(CartContext); // Getting dispatch function from CartContext
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  // Function to handle adding product to cart
  const handleAddToCart = (item, event) => {
    event.preventDefault(); // Prevent default link behavior
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, qty: 1 }, // Dispatching action to add item to cart
    });
    navigate('/shopping-cart'); // Navigating to shopping cart page
  };

  // Function to handle navigating to product details page
  const handleMoreDetails = (itemId, event) => {
    event.preventDefault(); // Prevent default link behavior
    navigate(`/products/${itemId}`); // Navigating to product details page
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
            whileHover={{ scale: 1.05 }} // Adding hover animation
            whileTap={{ scale: 0.95 }} // Adding tap animation
          >
            <Link to={`/products/${product.id}`} className="card-link">
              <img src={product.image} alt={product.name} className="card-image" />
              <div className="card-content">
                <h4>{product.name}</h4>
                <p>{product.category}</p>
                <p>{product.price}€</p>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(product, e)} // Handling add to cart
                >
                  <FaShoppingCart /> Add to cart
                </button>
                <button
                  className="more-details-btn"
                  onClick={(e) => handleMoreDetails(product.id, e)} // Handling more details navigation
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

export default CardsSuggestion; // Exporting the CardsSuggestion component for use in other parts of the application

/* Explanation:

1. **Imports**:
   - CSS file for styling.
   - `Link` and `useNavigate` from `react-router-dom` for navigation.
   - Icons from `react-icons`.
   - `motion` from `framer-motion` for animations.
   - `useContext` from React for accessing context.
   - `CartContext` for cart state management.
   - Product data and leaf image.

2. **Component Definition**:
   - `CardsSuggestion` is defined as a functional component.

3. **State Management**:
   - `dispatch` from `CartContext` is used to dispatch actions.
   - `navigate` from `useNavigate` is used for navigation.

4. **Event Handlers**:
   - `handleAddToCart`: Prevents default link behavior, dispatches an action to add the item to the cart, and navigates to the shopping cart page.
   - `handleMoreDetails`: Prevents default link behavior and navigates to the product details page.

5. **Return JSX**:
   - The component returns a structured JSX with title and product suggestion cards.
   - Each product card includes an image, name, category, price, and buttons for adding to the cart and viewing more details.
   - The `motion.div` is used to add animations on hover and tap.

6. **Export**:
   - The `CardsSuggestion` component is exported for use in other parts of the application.

The `CardsSuggestion` component is designed to display a list of suggested products with options to add them to the cart or view more details.
*/