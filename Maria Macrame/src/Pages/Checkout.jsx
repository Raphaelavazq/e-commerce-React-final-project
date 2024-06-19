// src/Pages/Checkout.jsx
import './Checkout.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import DeliveryForm from '@components/DeliveryForm';
import PaymentForm from "@components/PaymentForm";
import ReviewForm from '@components/ReviewForm';
import Summary from '@components/Summary';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div className="checkout-container">
        <h1>Checkout</h1>
        <div className="checkout-step">
          <h2>Step 1: Shipping Information</h2>
          <DeliveryForm />
        </div>
        <div className="checkout-step">
          <h2>Step 2: Payment Information</h2>
          <PaymentForm />
        </div>
        <div className="checkout-step">
          <h2>Step 3: Review and Confirm</h2>
          <ReviewForm />
        </div>
        <div className="checkout-step">
          <Summary />
        </div>
        <button className="checkout-button">Place Order</button>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;