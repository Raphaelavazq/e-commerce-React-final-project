// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-teal-900 text-white p-4">
      <h3 className="text-lime-400 mb-4">Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={category.href} className="hover:underline hover:text-lime-400">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;