
import { FaCheckCircle } from 'react-icons/fa';
import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';
import './Subscription.css';

const Subscription = () => {
  return (
    <section className="subscription-section relative flex flex-col items-center py-10 px-4 md:px-10 bg-white">
      <img
        src={leaf1}
        alt="Leaf Decoration 1"
        className="leaf-decoration leaf1"
      />
      <img
        src={leaf2}
        alt="Leaf Decoration 2"
        className="leaf-decoration leaf2"
      />
      <h2 className="text-3xl md:text-4xl text-pretty font-bold text-teal-900 mb-4 text-center">
        Get updates on the latest drops & collections.
      </h2>
      <div className="flex justify-center items-center space-x-4 mb-8 text-teal-900">
        <div className="flex items-center">
          <FaCheckCircle className="mr-2" />
          <span>Exclusive drops</span>
        </div>
        <div className="flex text-pretty items-center">
          <FaCheckCircle className="mr-2" />
          <span>Monthly discounts</span>
        </div>
        <div className="flex text-pretty items-center">
          <FaCheckCircle className="mr-2" />
          <span>Event invites</span>
        </div>
      </div>
      <form className="w-full text-pretty max-w-md flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-2 border-2 border-lime-600 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-teal-900 text-white px-6 py-2 rounded-r-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
        >
          Signup
        </button>
      </form>
      <p className="text-pretty text-teal-900 mt-4 text-center text-sm">
        No spam, no sharing, just quality content.
      </p>
    </section>
  );
};

export default Subscription;