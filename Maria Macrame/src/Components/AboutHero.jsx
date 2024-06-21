// Import necessary libraries and assets
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import './AboutHero.css'; // Importing CSS for styling
import leaf from '../assets/leaf.png'; // Importing leaf image
import aboutVideo from '../assets/aboutVideo.mp4'; // Importing video file

// AboutHero component definition
const AboutHero = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  // Function to handle button click to navigate to the shop page
  const handleSeeTheShop = () => {
    navigate('/shop/all'); // Navigate to the shop page
  };

  return (
    // Main container for the AboutHero component
    <div className="about-hero-container">
      
      {/* Content section of the AboutHero component */}
      <div className="about-hero-content">
        <h1>We are more than a shop, this is a lifestyle.</h1> {/* Heading */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo, reprehenderit alias eligendi.
        </p> {/* Subheading or description */}
        
        {/* Button to navigate to the shop page */}
        <button onClick={handleSeeTheShop} className="about-hero-button">
          See the shop
        </button>
        
        {/* Decorative leaf image */}
        <img src={leaf} alt="Leaf Decoration" className="leaf-left" />
      </div>

      {/* Video section of the AboutHero component */}
      <div className="about-hero-video">
        <video autoPlay muted loop playsInline className="about-video">
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Decorative leaf image */}
      <img src={leaf} alt="Leaf Decoration" className="leaf-right" />
    </div>
  );
};

export default AboutHero; // Export the AboutHero component for use in other parts of the application

/* Explanation:

1. **Imports**:
   - `useNavigate` from `react-router-dom` for navigation.
   - CSS file for styling.
   - Leaf image and video file as assets.

2. **Component Definition**:
   - `AboutHero` component is defined as a functional component.

3. **Navigation Setup**:
   - `useNavigate` hook is used to get the `navigate` function.

4. **Event Handler**:
   - `handleSeeTheShop` function is defined to handle button click and navigate to the shop page.

5. **Return JSX**:
   - The component returns JSX structure with two main sections: content and video.
   - Content section includes a heading, a paragraph, a button, and a decorative image.
   - Video section includes a video element with autoplay, mute, loop, and playsInline attributes.
   - Another decorative leaf image is placed outside the main content section.

6. **Export**:
   - The `AboutHero` component is exported for use in other parts of the application.

The `AboutHero` component is designed to display a promotional section with a heading, description, button to navigate to the shop, and a background video with decorative images.
*/