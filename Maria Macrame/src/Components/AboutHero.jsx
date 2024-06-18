import { useNavigate } from 'react-router-dom';
import './AboutHero.css';
import leaf from '../assets/leaf.png';
import aboutVideo from '../assets/aboutVideo.mp4'; // Add your video file path here

const AboutHero = () => {
  const navigate = useNavigate();

  const handleSeeTheShop = () => {
    navigate('/shop/all');
  };

  return (
    <div className="about-hero-container">
      <div className="about-hero-content">
        <h1>We are more than a shop, this is a lifestyle.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo, reprehenderit alias eligendi.
        </p>
        <button onClick={handleSeeTheShop} className="about-hero-button">
          See the shop
        </button>
        <img src={leaf} alt="Leaf Decoration" className="leaf-left" />
      </div>
      <div className="about-hero-video">
        <video autoPlay muted loop playsInline className="about-video">
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <img src={leaf} alt="Leaf Decoration" className="leaf-right" />
    </div>
  );
};

export default AboutHero;