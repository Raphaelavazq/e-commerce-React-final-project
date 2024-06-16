import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

const cartReducer = (state, action) => {
  let existingProduct;

  switch (action.type) {
    case 'ADD_TO_CART':
      existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return state.map(item =>
          item.id === action.payload.id ? { ...item, qty: item.qty + action.payload.qty } : item
        );
      }
      return [...state, { ...action.payload }];
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item
      );
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;