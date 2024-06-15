import Navbar from "@components/Navbar";
import Subscription from "@components/Subscription";
import SingleProduct from "@components/SingleProduct";
import Footer from "@components/Footer";
import CardsSuggestion from "@components/CardsSuggestion";

function ProductDetails() {
  return (
    <div>

      <Navbar />
      <SingleProduct />
      <CardsSuggestion />
      <Subscription />
      <Footer />
    </div>
  );
}

export default ProductDetails;