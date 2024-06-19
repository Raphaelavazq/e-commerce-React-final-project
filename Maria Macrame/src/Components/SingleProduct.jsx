import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaStar, FaRegStar, FaHeart } from 'react-icons/fa';
import CartContext from '../context/CartContext';
import { products } from '../data/products';
import './SingleProduct.css';

function SingleProduct() {
  const { productId } = useParams(); // Get the product ID from the URL parameters
  const product = products.find(p => p.id === parseInt(productId)); // Find the product with the matching ID
  const [quantity, setQuantity] = useState(1); // State for managing the product quantity
  const { dispatch } = useContext(CartContext); // Access the dispatch function from CartContext
  const navigate = useNavigate(); // Hook for navigation
  const [isFavorite, setIsFavorite] = useState(false); // State for managing the favorite status

  useEffect(() => {
    // Set the height of the image container to match the details container height
    const imageContainer = document.querySelector('.product-image-container');
    const detailsContainer = document.querySelector('.details-container');
    if (imageContainer && detailsContainer) {
      imageContainer.style.height = `${detailsContainer.offsetHeight}px`;
    }
  }, []);

  if (!product) {
    return <div>Product not found</div>; // Show a message if the product is not found
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Increase the product quantity by 1
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease the product quantity by 1, but not below 1
    }
  };

  const calculateSubtotal = () => {
    return quantity * product.price; // Calculate the subtotal based on the quantity and product price
  };

  const addToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        qty: quantity,
      },
    });
    navigate('/shopping-cart'); // Navigate to the shopping cart page
  };

  const handleMouseMove = (e) => {
    // Update the transform-origin of the image based on the mouse position
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle the favorite status of the product
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4 product-image-container rounded-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-lg" 
          onMouseMove={handleMouseMove} 
        />
      </div>
      <div className="w-full p-4 rounded-lg shadow-lg shadow-lime-600 mt-6 md:mt-0 details-container">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="mb-4">{product.description}</p>
          <h3 className="text-xl text-teal-900 font-bold mb-2">Details</h3>
          <ul className="list-none mb-4">
            <li><span className="text-lime-600 font-bold">Category:</span> {product.category}</li>
            <li><span className="text-lime-600 font-bold">Care Level:</span> {product.careLevel}</li>
            <li><span className="text-lime-600 font-bold">Light:</span> {product.light}</li>
            <li><span className="text-lime-600 font-bold">Water:</span> {product.water}</li>
            <li><span className="text-lime-600 font-bold">Pet Friendly:</span> {product.petFriendly ? 'Yes' : 'No'}</li>
          </ul>
          <details className="mb-2">
            <summary className="cursor-pointer">Delivery and returns</summary>
            <p>Details about delivery and returns...</p>
          </details>
          <details>
            <summary className="cursor-pointer">Customer reviews (23)</summary>
            <div className="flex items-center">
              <FaStar className="text-lime-600" />
              <FaStar className="text-lime-600" />
              <FaStar className="text-lime-600" />
              <FaStar className="text-lime-600" />
              <FaRegStar className="text-lime-600" />
              <span className="ml-2">4.5 stars</span>
            </div>
          </details>
        </div>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2">Qty</label>
          <div className="flex items-center border px-2 py-1 rounded">
            <button
              onClick={decreaseQuantity}
              disabled={quantity === 1}
              className="p-1 bg-teal-900 text-white rounded-l focus:outline-none"
            >
              <FaMinus />
            </button>
            <input
              type="text"
              id="quantity"
              value={quantity}
              readOnly
              className="w-12 text-center bg-white border-none"
            />
            <button
              onClick={increaseQuantity}
              className="p-1 bg-teal-900 text-white rounded-r focus:outline-none"
            >
              <FaPlus />
            </button>
          </div>
          <button
            onClick={toggleFavorite}
            className={`ml-2 p-2 bg-teal-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50 heart-icon ${isFavorite ? 'clicked' : ''}`}
          >
            <FaHeart />
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>You picked {quantity} item{quantity !== 1 ? 's' : ''}</span>
          <span className="text-2xl font-bold">{calculateSubtotal()}€</span>
        </div>
        <button onClick={addToCart} className="w-full py-3 mb-2 bg-teal-900 text-white font-bold rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;

/*
Explanation:

1. Imports:
   - Import necessary hooks, icons, context, data, and CSS.
   - `useState`, `useContext`, `useEffect`, `useParams`, and `useNavigate` from 'react' and 'react-router-dom'.
   - `FaPlus`, `FaMinus`, `FaStar`, `FaRegStar`, and `FaHeart` from 'react-icons/fa'.
   - `CartContext` for managing the cart state.
   - `products` data for product details.
   - CSS for styling.

2. SingleProduct Component:
   - Retrieves the product ID from the URL parameters using `useParams`.
   - Finds the product with the matching ID from the `products` array.
   - Initializes state variables for quantity, favorite status, and dispatch function from the cart context.
   - Sets the height of the image container to match the details container height using `useEffect`.

3. Product Not Found:
   - If the product is not found, it returns a "Product not found" message.

4. Quantity Management:
   - `increaseQuantity`: Increases the product quantity by 1.
   - `decreaseQuantity`: Decreases the product quantity by 1, but not below 1.
   - `calculateSubtotal`: Calculates the subtotal based on the quantity and product price.

5. Add to Cart:
   - Dispatches an action to add the product to the cart with the specified quantity.
   - Navigates to the shopping cart page after adding the product to the cart.

6. Image Mouse Move:
   - Updates the transform-origin of the image based on the mouse position for a zoom effect.

7. Toggle Favorite:
   - Toggles the favorite status of the product.

8. Render:
   - Renders the product details including image, name, description, category, care level, light, water, and pet friendliness.
   - Renders quantity controls, favorite button, and add to cart button.
   - Uses CSS classes for styling and layout.

This setup provides a detailed view of a single product with functionality to adjust the quantity, mark as favorite, and add to the cart.
*/