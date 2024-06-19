// src/components/DeliveryForm.jsx

const DeliveryForm = () => {
  return (
    <form className="checkout-form">
      <label>
        Full Name
        <input type="text" name="name" required />
      </label>
      <label>
        Address
        <input type="text" name="address" required />
      </label>
      <label>
        City
        <input type="text" name="city" required />
      </label>
      <label>
        State
        <input type="text" name="state" required />
      </label>
      <label>
        Zip Code
        <input type="text" name="zip" required />
      </label>
      <label>
        Country
        <input type="text" name="country" required />
      </label>
    </form>
  );
};

export default DeliveryForm;