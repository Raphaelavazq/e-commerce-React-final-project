import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero';
import ValueCard from './Components/ValueCard';
import HomeBlog from './Components/HomeBlog';
import HomeCarroussel from './Components/HomeCarroussel';
import MovingCards from './Components/MovingCards'; 
import LeafDecoration from './Components/LeafDecoration'; 

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
    </>
  );
}

export default App;