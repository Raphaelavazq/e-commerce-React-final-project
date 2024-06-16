import { useContext } from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import CartContext from '../context/CartContext';
import singleProduct from '../assets/singleProduct.png';

const ShopCart = () => {
  // Access cart items and dispatch function from the CartContext
  const { cartItems, dispatch } = useContext(CartContext);

  // Handle quantity change
  const handleQtyChange = (id, qty) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, qty: parseInt(qty) },
    });
  };

  // Handle item removal from cart
  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  };

  // Calculate subtotal and total cost
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const deliveryFee = 5; // Example fixed delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className="shopping-cart-container mx-auto p-4 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-2xl text-teal-900 font-bold mb-4">Your shopping cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-teal-900 font-bold mb-4">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item flex justify-between items-center mb-4 p-6 border-b">
              <img src={singleProduct} alt={item.name} className="w-28 h-28 rounded-lg" />
              <div className="cart-item-details flex-1 ml-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-xl font-bold">{item.price}€</p>
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
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="mt-2 p-2 bg-teal-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
                >
                  <FaTrash />
                </button>
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
        <button className="w-full py-3 bg-teal-900 text-white font-bold rounded-lg">Checkout</button>
      </div>
    </div>
  );
};

export default ShopCart;