// src/components/SingleProductView.jsx
import { useState } from 'react';
import { FaPlus, FaMinus, FaStar, FaRegStar } from 'react-icons/fa';
import singleProduct from '../assets/singleProduct.png';

function SingleProductView() {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const calculateSubtotal = () => {
    return quantity * 0; // Assuming the price is 0 for now
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-4">
        <img src={singleProduct} alt="Spider plant" className="w-full h-auto rounded-lg" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">Spider plant</h1>
        <div className="flex items-center mb-4">
          <button onClick={decreaseQuantity} className="p-2 bg-gray-200 rounded-full">
            <FaMinus />
          </button>
          <span className="mx-4">{quantity}</span>
          <button onClick={increaseQuantity} className="p-2 bg-gray-200 rounded-full">
            <FaPlus />
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>You picked {quantity} item{quantity !== 1 ? 's' : ''}</span>
          <span className="text-2xl font-bold">{calculateSubtotal()}€</span>
        </div>
        <div className="mb-4">
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
        <button className="w-full py-3 mb-2 bg-teal-900 text-white font-bold rounded-lg">Add to cart</button>
        <button className="w-full py-3 bg-gray-200 text-teal-900 font-bold rounded-lg">Favorite</button>
      </div>
    </div>
  );
}

export default SingleProductView;