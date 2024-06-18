import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaStar, FaRegStar, FaHeart } from 'react-icons/fa';
import CartContext from '../context/CartContext';
import { products } from '../data/products';
import './SingleProduct.css';

function SingleProduct() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const imageContainer = document.querySelector('.product-image-container');
    const detailsContainer = document.querySelector('.details-container');
    if (imageContainer && detailsContainer) {
      imageContainer.style.height = `${detailsContainer.offsetHeight}px`;
    }
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateSubtotal = () => {
    return quantity * product.price;
  };

  const addToCart = () => {
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
    navigate('/shopping-cart');
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    e.target.style.transformOrigin = `${x}% ${y}%`;
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
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