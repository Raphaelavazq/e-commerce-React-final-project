import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero';
import ValueCard from './Components/ValueCard';
import HomeBlog from './Components/HomeBlog';
import HomeCarroussel from './Components/HomeCarroussel';
import MovingCards from './Components/MovingCards'; 
import LeafDecoration from './Components/LeafDecoration'; 
import PopularPlantSlider from './Components/PopularPlantSlider';

function App() {
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
    </>
  );
}

export default App;