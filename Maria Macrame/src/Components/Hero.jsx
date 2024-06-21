import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook from react-router-dom for navigation
import heroVideo from '../assets/herovideo.mp4'; // Adjust the import path as necessary for the video file

function Hero() {
  const navigate = useNavigate(); // Initializing the navigate function for routing

  // Function to handle the "Shop Now" button click
  const handleShopNowClick = () => {
    navigate('/shop/all'); // Navigates to the shop page with 'all' category
  };

  // Function to handle the "Learn More" button click
  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigates to the about page
  };

  return (
    <section className="pt-20 pb-10 bg-white flex flex-col items-center">
      <div className="relative w-full max-w-7xl px-4 md:px-12">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Video Content */}
          <div className="relative w-full md:w-auto">
            <video
              className="w-full h-full object-cover rounded-lg md:rounded-none md:relative md:right-0 md:top-0 transform md:scale-110"
              autoPlay
              loop
              muted
              playsInline
              style={{ height: '100%', maxHeight: '500px' }}
            >
              <source src={heroVideo} type="video/mp4" /> {/* Setting the video source */}
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content for all screens */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:p-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-teal-900 leading-tight lg:leading-[1.2]">
              Surround Yourself <br /> with <br />Nature’s Elegance
            </h1>
            <div className="flex gap-3.5 justify-center md:justify-start mt-8 text-sm lg:text-base">
              {/* Shop Now Button */}
              <button 
                onClick={handleShopNowClick} // Adding onClick handler for Shop Now button
                className="px-6 py-3 text-white bg-teal-900 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
              >
                Shop now
              </button>
              {/* Learn More Button */}
              <button 
                onClick={handleLearnMoreClick} // Adding onClick handler for Learn More button
                className="px-6 py-3 text-white bg-lime-600 rounded-md shadow-sm hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; // Exporting the Hero component

/* Explanation:

1. **Imports**:
   - `useNavigate` from `react-router-dom` is imported for navigation.
   - The hero video file is imported to be used in the component.

2. **Hero Component**:
   - Defined as a functional component.

3. **useNavigate Hook**:
   - `useNavigate` is initialized to facilitate routing when buttons are clicked.

4. **Event Handlers**:
   - `handleShopNowClick`: Navigates to the shop page with 'all' category.
   - `handleLearnMoreClick`: Navigates to the about page.

5. **JSX Structure**:
   - The component is structured with a section containing the video and text content.
   - **Video Content**:
     - A video element is included which auto-plays, loops, and is muted.
     - The video file is sourced from the imported `heroVideo`.
   - **Text Content**:
     - Includes a heading with a multi-line message.
     - Contains two buttons: "Shop now" and "Learn more".
     - Both buttons are styled and have event handlers for navigation.

6. **Styling**:
   - Tailwind CSS classes are used for styling.
   - Video and text content are responsive, adapting to different screen sizes.

7. **Export**:
   - The `Hero` component is exported for use in other parts of the application.

This `Hero` component is designed to be a prominent section on the homepage, encouraging users to explore the shop or learn more about the business.
*/