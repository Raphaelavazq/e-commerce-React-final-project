// src/pages/ProductDetailPage.jsx
import Navbar from "@components/Navbar";
import Subscription from "@components/Subscription";
import SingleProduct from "@components/SingleProduct";
import Footer from "@components/Footer";


function ProductDetails() {
    return (
      
      <div>

        <Navbar />
        <SingleProduct />
        <Subscription />
        <Footer />

        </div>
      
    );
  }
  
  export default ProductDetails;