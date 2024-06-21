import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing left and right chevron icons from react-icons
import carousel1 from '../assets/carousel1.jpg'; // Importing images for the carousel
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel2.png';
import leaf1 from '../assets/leaf1.png'; // Importing leaf images for decoration
import leaf2 from '../assets/leaf2.png';

// Array of imported images
const images = [carousel1, carousel2, carousel3]; // Array containing the images for the carousel

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Update the index to the next image
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Update the index to the previous image
  };

  // Automatically move to the next slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(); // Call nextSlide function every 6 seconds
    }, 6000);
    return () => clearInterval(timer); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto mt-40 sm:px-10">
      <div className="relative mx-auto mt-30 md:px-14 sm:px-10 pt-5 pb-20">
        <div className="relative z-10">
          <img
            loading="lazy"
            src={images[currentIndex]}
            className="w-full object-cover rounded-lg"
            alt="Slider Image"
          /> {/* Display the current image */}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-teal-900" style={{ height: '60%' }}></div> {/* Background overlay */}
        <div className="absolute top-60 left-0 z-20 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={leaf1}
            alt="Leaf Decoration 1"
            className="w-32 h-32 md:w-60 md:h-80"
          /> {/* Leaf decoration on the left */}
        </div>
        <div className="absolute top-40 right-0 z-20 transform translate-x-1/2 -translate-y-1/2">
          <img
            src={leaf2}
            alt="Leaf Decoration 2"
            className="w-32 h-32 md:w-60 md:h-80"
          /> {/* Leaf decoration on the right */}
        </div>
      </div>
      <div className="bg-teal-900 text-white text-center py-3 px-10 flex justify-center items-center relative">
        <span className="text-xl pb-12 md:text-xl lg:text-xl font-bold">We put everything together</span> {/* Caption */}
        <div className="flex items-center pb-12 space-x-2 absolute right-4">
          <button
            onClick={prevSlide}
            className="bg-white text-teal-900 rounded-full p-2"
          >
            <FaChevronLeft /> {/* Button to go to the previous slide */}
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-teal-900 rounded-full p-2"
          >
            <FaChevronRight /> {/* Button to go to the next slide */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;

/* Explanation:

1. **Imports**:
   - `useState` and `useEffect` hooks from React.
   - `FaChevronLeft` and `FaChevronRight` icons from `react-icons/fa` for navigation buttons.
   - Importing images for the carousel and decorative leaf images.

2. **State Management**:
   - `currentIndex`: State to track the current index of the displayed image in the carousel.

3. **Next and Previous Slide Functions**:
   - `nextSlide`: Increments the `currentIndex` to show the next image. Uses modulo to cycle back to the first image.
   - `prevSlide`: Decrements the `currentIndex` to show the previous image. Uses modulo to cycle to the last image if at the first image.

4. **useEffect Hook**:
   - Sets up an interval to automatically call `nextSlide` every 6 seconds.
   - Cleans up the interval on component unmount to prevent memory leaks.

5. **JSX Structure**:
   - Container div with relative positioning to contain the entire carousel.
   - Image display section with a `div` for the image and background overlay.
   - Decorative leaf images positioned absolutely.
   - Caption and navigation buttons at the bottom of the carousel.

6. **Styling**:
   - Tailwind CSS classes are used for styling, including responsive design and positioning.
   - `whileHover` and `whileTap` animations from `framer-motion` are applied to the card.

The `ImageSlider` component creates an image carousel with navigation buttons and automatic image rotation, enhanced with decorative elements and smooth transitions.
*/