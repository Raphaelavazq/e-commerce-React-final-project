// src/components/PaymentForm.jsx

const PaymentForm = () => {
  return (
    <form className="checkout-form">
      <label>
        Card Number
        <input type="text" name="cardNumber" required />
      </label>
      <label>
        Expiration Date
        <input type="text" name="expirationDate" required />
      </label>
      <label>
        CVV
        <input type="text" name="cvv" required />
      </label>
    </form>
  );
};

export default PaymentForm;