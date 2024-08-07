import { useState, useContext } from 'react'; // Import necessary hooks and context from React
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaShoppingCart } from 'react-icons/fa'; // Import shopping cart icon
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import CartContext from '../context/CartContext'; // Import CartContext for cart management
import logo from '../assets/Maria-logo.png'; // Import logo image

// NavItem component to render individual navigation items
function NavItem({ children, href }) {
  return (
    <Link to={href} className="self-stretch my-auto hover:underline hover:text-lime-500">
      {children}
    </Link>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired, // PropType for children, required
  href: PropTypes.string.isRequired, // PropType for href, required
};

// NavItems component to render all navigation items
function NavItems() {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' }, // Path for About page
    { name: 'Shop', href: '/shop/all' }, // Path for Shop page
  ];
  return (
    <>
      {items.map((item) => (
        <NavItem key={item.name} href={item.href}>
          {item.name}
        </NavItem>
      ))}
    </>
  );
}

// LoginButton component for the login button
function LoginButton() {
  return (
    <Link
      to="/login"
      className="justify-center px-6 py-3.5 text-base bg-lime-600 rounded-lg shadow-sm max-md:px-5 hover:bg-lime-700"
    >
      Log in
    </Link>
  );
}

// Main NavBar component
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu
  const { cartItems } = useContext(CartContext); // Access cart items from CartContext

  // Calculate total item count including quantities
  const totalItemCount = cartItems.reduce((total, item) => total + item.qty, 0);

  // Toggle the menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row md:items-center gap-5 px-2 py-1 font-medium text-white bg-teal-900 md:px-20 sm:px-10">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center space-x-4">
          <Link to="/" className="pl-10 md:pl-0 text-2xl leading-tight md:text-3xl md:leading-[84px]">
            <img src={logo} alt="Maria Logo" className="h-16 md:h-40" /> {/* Display logo */}
          </Link>
        </div>
        <button
          className="md:hidden text-white text-4xl p-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰ {/* Mobile menu toggle button */}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`flex flex-col md:flex-row md:flex-1 gap-5 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}
        role="navigation"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <NavItems /> {/* Render navigation items */}
          <div className="relative">
            <Link to="/shopping-cart" className="text-white text-2xl p-2">
              <FaShoppingCart /> {/* Shopping cart icon */}
            </Link>
            {totalItemCount > 0 && (
              <span className="absolute top-3 -right-2 bg-lime-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItemCount} {/* Display total item count */}
              </span>
            )}
          </div>
          <LoginButton /> {/* Render login button */}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;