// src/components/PopularPlantSlider.jsx
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import plantImage from '../assets/plant.png';

const items = [
  { id: 1, title: 'Most Popular Plant', description: 'The following plants are suitable for the work environment so that you stay comfortable...', image: plantImage },
  { id: 2, title: 'Most Popular Plant', description: 'The following plants are suitable for the work environment so that you stay comfortable...', image: plantImage },
  { id: 3, title: 'Most Popular Plant', description: 'The following plants are suitable for the work environment so that you stay comfortable...', image: plantImage },
  { id: 4, title: 'Most Popular Plant', description: 'The following plants are suitable for the work environment so that you stay comfortable...', image: plantImage },
];

function PopularPlantSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-40 max-w-6xl mx-auto mt-60 px-8 sm:px-200">
      <div className="relative bg-teal-900 pt-5 pb-0 rounded-[40.83px] sm:w-[100%] mx-auto">
        <div className="relative z-10 flex items-end justify-between px-4 md:px-12" style={{ height: '200px' }}>
          <button
            onClick={prevSlide}
            className="bg-white text-teal-900 rounded-full p-2 mb-20 shadow-md"
          >
            <FaChevronLeft />
          </button>
          <div className="flex flex-col items-start text-left flex-grow mb-10">
            <h1 className="px-5 sm:text-xxl text-2xl md:text-2xl font-bold text-white mb-2">{items[currentIndex].title}</h1>
            <p className="px-5 hidden md:block text-base md:text-lg text-white mb-2">{items[currentIndex].description}</p>           
             <div className="px-5 flex justify-start mt-2 space-x-2">
              {items.map((item, idx) => (
                <div key={idx} className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-white opacity-50'}`}></div>
              ))}
            </div>
          </div>
          <img
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[350px] h-auto  ml-[-20px] sm:ml-[-30px] md:ml-0"
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
          />
          <button
            onClick={nextSlide}
            className="bg-white text-teal-900 rounded-full p-2 mb-20 shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularPlantSlider;