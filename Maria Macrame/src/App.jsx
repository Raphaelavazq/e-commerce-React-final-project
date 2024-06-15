// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import ProductDetails from '@pages/ProductDetails';
import About from '@pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;