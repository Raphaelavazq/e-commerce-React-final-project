import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel2.png';
import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';

// Array of imported images
const images = [carousel1, carousel2, carousel3];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically move to the next slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
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
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-teal-900" style={{ height: '60%' }}></div>
        <div className="absolute top-60 left-0 z-20 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={leaf1}
            alt="Leaf Decoration 1"
            className="w-32 h-32 md:w-60 md:h-80"
          />
        </div>
        <div className="absolute top-40 right-0 z-20 transform translate-x-1/2 -translate-y-1/2">
          <img
            src={leaf2}
            alt="Leaf Decoration 2"
            className="w-32 h-32 md:w-60 md:h-80"
          />
        </div>
      </div>
      <div className="bg-teal-900 text-white text-center py-3 px-10 flex justify-center items-center relative">
        <span className="text-xl pb-12 md:text-xl lg:text-xl font-bold">We put everything together</span>
        <div className="flex items-center pb-12 space-x-2 absolute right-4">
          <button
            onClick={prevSlide}
            className="bg-white text-teal-900 rounded-full p-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-teal-900 rounded-full p-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;