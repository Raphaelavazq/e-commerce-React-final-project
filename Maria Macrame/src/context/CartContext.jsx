import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Create a context for the cart
const CartContext = createContext();

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  let existingProduct;

  switch (action.type) {
    // Add item to the cart
    case 'ADD_TO_CART':
      // Check if the product already exists in the cart
      existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        // If it exists, update the quantity
        return state.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + action.payload.qty } : item
        );
      }
      // If it does not exist, add the new product to the cart
      return [...state, { ...action.payload }];

    // Update the quantity of an existing item in the cart
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
      );

    // Remove an item from the cart
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    // Default case returns the current state
    default:
      return state;
  }
};

// Provider component to wrap the application and provide cart state
export const CartProvider = ({ children }) => {
  // useReducer hook to manage cart state using the cartReducer function
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    // Provide the cart state and dispatch function to child components
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// PropTypes validation to ensure children is a required prop
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;