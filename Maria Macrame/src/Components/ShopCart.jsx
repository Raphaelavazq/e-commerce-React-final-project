// Importing necessary libraries and components
import { useContext, useState } from 'react'; // React hooks for state management and context
import { FaTrash, FaMinus, FaPlus, FaHeart } from 'react-icons/fa'; // Icons from react-icons library
import { useNavigate } from 'react-router-dom'; // For navigation within the app
import CartContext from '../context/CartContext'; // Custom context for cart state
import './ShopCart.css'; // Styles for the ShopCart component

const ShopCart = () => {
  const { cartItems, dispatch } = useContext(CartContext); // Getting cart items and dispatch function from CartContext
  const [clickedItems, setClickedItems] = useState({}); // State to track clicked favorite items
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle quantity changes
  const handleQtyChange = (id, qty) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, qty: parseInt(qty) },
    });
  };

  // Function to handle removing items from the cart
  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  };

  // Function to handle favoriting items
  const handleFavorite = (id) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Calculating subtotal and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = 5; // Example fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className="shopping-cart-container mx-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-2xl text-teal-900 font-bold mb-4 text-center md:text-left">Your shopping cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-teal-900 font-bold mb-4 text-center md:text-left">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="text-xl font-semibold">{item.name} <span className="text-xl font-bold">{item.price}€</span></h3>
                <p>{item.description}</p>
                <div className="flex items-center mt-2">
                  <label htmlFor={`qty-${item.id}`} className="mr-2">Qty</label>
                  <div className="flex items-center border px-2 py-1 rounded">
                    <button
                      onClick={() => handleQtyChange(item.id, item.qty - 1)}
                      disabled={item.qty === 1}
                      className="p-1 bg-teal-900 text-white rounded-l focus:outline-none"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      id={`qty-${item.id}`}
                      value={item.qty}
                      readOnly
                      className="w-12 text-center bg-white border-none"
                    />
                    <button
                      onClick={() => handleQtyChange(item.id, item.qty + 1)}
                      className="p-1 bg-teal-900 text-white rounded-r focus:outline-none"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => handleFavorite(item.id)}
                    className={`ml-2 p-2 bg-teal-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50 heart-icon ${
                      clickedItems[item.id] ? 'clicked' : ''
                    }`}
                  >
                    <FaHeart />
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-2 p-2 bg-teal-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="w-full md:w-1/3 p-4 rounded-lg shadow-lg shadow-lime-600 mt-6 md:mt-0">
        <h2 className="text-2xl text-teal-900 text-center font-bold mb-4">Order summary</h2>
        <div className="mb-4">
          <label htmlFor="promo-code" className="block text-zinc-900 mb-2">Promo code?</label>
          <div className="flex items-center">
            <input
              type="text"
              id="promo-code"
              className="w-full px-4 py-2 border text-zinc-900 border-lime-400 rounded-l-md focus:outline-none"
              placeholder="Enter promo code"
            />
            <button className="px-4 py-2 bg-teal-900 text-white rounded-r-md">Redeem</button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <span>{subtotal}€</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Delivery</span>
            <span>{deliveryFee}€</span>
          </div>
        </div>
        <div className="mb-4 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Total</span>
            <span className="text-xl font-bold">{total}€</span>
          </div>
        </div>
        <button 
          className="w-full py-3 bg-teal-900 text-white font-bold rounded-lg"
          onClick={() => navigate('/checkout')} // Navigates to the checkout page
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShopCart;

/*
Explanation:

1. **Imports**:
   - Importing React hooks (`useContext`, `useState`) for state management.
   - Importing `FaTrash`, `FaMinus`, `FaPlus`, and `FaHeart` from `react-icons` for icon usage.
   - Importing `useNavigate` from `react-router-dom` for navigation.
   - Importing `CartContext` for accessing the cart state and dispatch function.
   - Importing the component's CSS for styling.

2. **ShopCart Component**:
   - The `ShopCart` component displays the items in the shopping cart, allows users to update quantities, remove items, and proceed to checkout.
   - Uses `useContext` to access the cart items and dispatch function from `CartContext`.
   - Uses `useState` to manage the state of clicked favorite items.
   - Defines functions to handle quantity changes, removing items, and favoriting items.
   - Calculates the subtotal and total for the order.

3. **JSX Structure**:
   - Renders the shopping cart container with flexbox layout.
   - If the cart is empty, displays a message indicating the cart is empty.
   - Maps over the `cartItems` array to display each item in the cart.
     - Includes an image, name, price, description, quantity controls, and buttons for favoriting and removing items.
   - Displays the order summary with subtotal, delivery fee, and total.
   - Includes an input for promo code and a button to proceed to checkout, navigating to the `/checkout` route.

4. **Styling**:
   - Applies classes for styling the cart container, items, and buttons.
   - Uses `className` to conditionally apply classes based on state (e.g., `clicked` class for favorited items).

5. **Navigation**:
   - Uses `useNavigate` to navigate to the checkout page when the checkout button is clicked.
*/