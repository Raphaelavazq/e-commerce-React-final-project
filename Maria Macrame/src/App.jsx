// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import ProductDetails from "@pages/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;