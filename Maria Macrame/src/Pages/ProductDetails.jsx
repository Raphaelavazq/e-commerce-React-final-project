import Navbar from '@components/Navbar';
import Subscription from '@components/Subscription';
import SingleProduct from '@components/SingleProduct';
import MovingCards from "@components/MovingCards";
import CardsSuggestion from "@components/CardsSuggestion";
import Footer from '@components/Footer';

function ProductDetails() {
  return (
    <div>
      <Navbar />
      <SingleProduct />
      <MovingCards />
      <CardsSuggestion />
      <Subscription />
      <Footer />
    </div>
  );
}

export default ProductDetails;