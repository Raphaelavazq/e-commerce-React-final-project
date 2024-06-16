import Navbar from "@components/Navbar";
import Subscription from "@components/Subscription";
import ShopCart from "@components/ShopCart";
import CardsSuggestion from "@components/CardsSuggestion";
import Footer from "@components/Footer";

function ShoppingCart() {
  return (
    <div>

      <Navbar />
      <ShopCart />
      <CardsSuggestion />
      <Subscription />
      <Footer />
    </div>
  );
}

export default ShoppingCart;