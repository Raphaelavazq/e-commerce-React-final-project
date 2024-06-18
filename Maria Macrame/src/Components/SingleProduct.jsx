import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaStar, FaRegStar } from 'react-icons/fa';
import CartContext from '../context/CartContext';
import { products } from '../data/products';
import './SingleProduct.css';

function SingleProduct() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

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

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="mb-4">{product.description}</p>
          <h3 className="text-xl font-bold mb-2">Details</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Care Level:</strong> {product.careLevel}</li>
            <li><strong>Light:</strong> {product.light}</li>
            <li><strong>Water:</strong> {product.water}</li>
            <li><strong>Pet Friendly:</strong> {product.petFriendly ? 'Yes' : 'No'}</li>
          </ul>
          <details className="mb-2">
            <summary className="cursor-pointer">Delivery and returns</summary>
            <p>Details about delivery and returns...</p>
          </details>
          <details>
            <summary className="cursor-pointer">Customer reviews (23)</summary>
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaRegStar className="text-yellow-500" />
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
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>You picked {quantity} item{quantity !== 1 ? 's' : ''}</span>
          <span className="text-2xl font-bold">{calculateSubtotal()}€</span>
        </div>
        <button onClick={addToCart} className="w-full py-3 mb-2 bg-teal-900 text-white font-bold rounded-lg hover:bg-lime-600">
          Add to cart
        </button>
        <button className="w-full py-3 bg-gray-200 text-teal-900 font-bold rounded-lg">Add to Wish list</button>
      </div>
    </div>
  );
}

export default SingleProduct;