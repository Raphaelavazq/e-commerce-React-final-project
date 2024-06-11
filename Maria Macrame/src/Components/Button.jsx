import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 text-sm font-medium text-white bg-teal-900 rounded-md shadow-sm hover:bg-teal-700 transition-colors duration-200"
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;