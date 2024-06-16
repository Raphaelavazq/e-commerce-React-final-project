import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../context/CartContext';

// NavItem component to render individual navigation items
function NavItem({ children, href }) {
  return (
    <Link to={href} className="self-stretch my-auto hover:underline hover:text-lime-500">
      {children}
    </Link>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

// NavItems component to render all navigation items
function NavItems() {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products/1' }, // Adjust this path according to your routes
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '/about' },
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
    <button
      className="justify-center self-stretch px-6 py-3.5 text-base bg-lime-600 rounded-lg shadow-sm max-md:px-5 hover:bg-lime-700"
    >
      Log in
    </button>
  );
}

// Main NavBar component
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce((total, item) => total + item.qty, 0);

  // Toggle the menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row md:items-center gap-5 px-2 py-1 font-medium text-white bg-teal-900 md:px-20 sm:px-10">
      {/* Logo */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center space-x-4">
          <Link to="/" className="pl-10 text-2xl leading-tight md:text-3xl md:leading-[84px]">
            Maria 
          </Link>
        </div>
        <button
          className="md:hidden text-white text-4xl p-4"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`flex flex-col md:flex-row md:flex-1 gap-5 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end`}
        role="navigation"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <NavItems />
          <div className="relative flex items-center">
            <Link to="/shopping-cart" className="text-3xl relative">
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
          <LoginButton />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;