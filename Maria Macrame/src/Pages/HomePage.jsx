// src/Pages/HomePage.jsx
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import ValueCard from "@components/ValueCard";
import HomeBlog from "@components/HomeBlog";
import HomeCarroussel from "@components/HomeCarroussel";
import MovingCards from "@components/MovingCards";
import LeafDecoration from "@components/LeafDecoration";
import PopularPlantSlider from "@components/PopularPlantSlider";
import Subscription from "@components/Subscription";
import Footer from "@components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueCard />
      <LeafDecoration />
      <HomeBlog />
      <MovingCards />
      <HomeCarroussel />
      <PopularPlantSlider />
      <Subscription />
      <Footer />
    </>
  );
}

export default HomePage;