import Navbar from "@components/Navbar";
import LeafDecoration from "@components/LeafDecoration";
import Subscription from "@components/Subscription";
import ShopCart from "@components/ShopCart";
import CardsSuggestion from "@components/CardsSuggestion";
import Footer from "@components/Footer";

function ShoppingCart() {
  return (
    <div>
      <Navbar />
      <ShopCart />
      <LeafDecoration />
      <CardsSuggestion />
      <Subscription />
      <Footer />
    </div>
  );
}

export default ShoppingCart;