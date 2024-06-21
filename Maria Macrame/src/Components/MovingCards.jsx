import { useEffect, useState, useRef, useContext } from "react"; // Importing necessary hooks and context from React
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from react-router-dom
import { FaShoppingCart } from 'react-icons/fa'; // Importing the shopping cart icon from react-icons
import { cn } from "../utils/cn"; // Importing the utility function for conditional class names
import CartContext from '../context/CartContext'; // Importing the CartContext
import { products } from '../data/products'; // Importing the products data
import './MovingCards.css'; // Importing the CSS file for MovingCards

const MovingCards = () => {
  const containerRef = useRef(null); // Creating a ref for the container element
  const scrollerRef = useRef(null); // Creating a ref for the scroller element
  const [start, setStart] = useState(false); // State to control the start of the animation
  const { dispatch } = useContext(CartContext); // Using the CartContext to dispatch actions
  const navigate = useNavigate(); // Using the useNavigate hook to navigate programmatically

  useEffect(() => {
    addAnimation(); // Call the addAnimation function when the component mounts
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children); // Get all children of the scroller

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true); // Clone each item
        scrollerRef.current.appendChild(duplicatedItem); // Append the cloned item to the scroller
      });

      setStart(true); // Set the start state to true to begin the animation
    }
  };

  const handleAddToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, qty: 1 },
    }); // Dispatch an action to add the item to the cart with a quantity of 1
    navigate('/shopping-cart'); // Navigate to the shopping cart page
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden mx-auto',
        'md:px-14 sm:px-10'
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll-slow', // Add the scroll animation class if start is true
          'hover:[animation-play-state:paused]' // Pause animation on hover
        )}
      >
        {products.map((item) => (
          <li
            key={item.id}
            className='w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]'
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-t-2xl w-full h-full object-contain"
              /> {/* Display product image */}
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3> {/* Display product name */}
              <p className="text-gray-400">{item.category}</p> {/* Display product category */}
              <p className="text-gray-800 font-bold">{item.price}€</p> {/* Display product price */}
              <button 
                onClick={() => handleAddToCart(item)}
                className="mt-4 flex items-center justify-center bg-teal-900 text-white px-4 py-2 rounded-md"
              >
                <FaShoppingCart />
              </button> {/* Add to cart button */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovingCards;

/*
Explanation:

1. **Imports**:
   - Importing React hooks (`useEffect`, `useState`, `useRef`, `useContext`) for state management and side effects.
   - Importing `useNavigate` from `react-router-dom` for programmatic navigation.
   - Importing `FaShoppingCart` icon from `react-icons` for the shopping cart button.
   - Importing `cn` utility function for conditional class names.
   - Importing `CartContext` to manage cart-related actions.
   - Importing product data from `products.js`.
   - Importing CSS file for styling the `MovingCards` component.

2. **State Management**:
   - `containerRef` and `scrollerRef` are used to reference the container and scroller elements, respectively.
   - `start` state determines when to start the scroll animation.
   - `dispatch` is used to dispatch actions to the cart context.
   - `navigate` is used for navigation.

3. **useEffect Hook**:
   - Calls `addAnimation` on component mount to setup the animation.

4. **addAnimation Function**:
   - Clones each child element in the scroller and appends it to create an infinite scrolling effect.
   - Sets the `start` state to true to trigger the animation.

5. **handleAddToCart Function**:
   - Dispatches an action to add the product to the cart with a quantity of 1.
   - Navigates to the shopping cart page.

6. **JSX Structure**:
   - Container div with a reference (`containerRef`).
   - Unordered list with a reference (`scrollerRef`) containing product items.
   - Each product item is displayed with its image, name, category, price, and an "Add to cart" button.

7. **Styling**:
   - Tailwind CSS classes are used for styling, including responsive design and positioning.
   - Conditional class names are used for animations.
*/