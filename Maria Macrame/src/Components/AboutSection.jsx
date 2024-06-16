import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import aboutVideo1 from '../assets/aboutVideo1.mp4';
import aboutVideo2 from '../assets/aboutVideo2.mp4';
import aboutVideo3 from '../assets/aboutVideo3.mp4';
import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';

// Array of imported videos
const videos = [
  { src: aboutVideo1, title: 'How it started', text: 'In 2011 Maria decided to start selling her macrame on the online sphere. With a small Paypal account and FaceBook, we were up and running.' },
  { src: aboutVideo2, title: 'The web store is live', text: 'In 2021 Maria decided to start selling her macrame with her Plants on the online sphere. With a small Paypal account and FaceBook, we were up and running.' },
  { src: aboutVideo3, title: 'Growth gets bigger', text: 'The business has been getting bigger and bigger, and now we have 240 employees, 13 stores and over three million web visits every single month.' },
];

function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  // Automatically move to the next slide every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto mt-40 sm:px-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 text-center mb-10">The Story So Far</h1>
      <div className="relative mx-auto mt-30 md:px-14 sm:px-10 pt-5 ">
        <div className="relative z-10">
          <video
            loading="lazy"
            src={videos[currentIndex].src}
            className="w-full object-cover rounded-lg"
            autoPlay
            loop
            muted
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
      <div className="bg-teal-900 text-white text-center py-3 px-10 flex flex-col items-center relative">
        <h2 className="text-3xl text-white  md:text-4xl lg:text-5xl mt-6  mb-4">{videos[currentIndex].title}</h2>
        <span className="text-xl text-white lg:text-3xl pb-12 md:text-xl ">{videos[currentIndex].text}</span>
        <div className="flex items-center space-x-2">
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

export default VideoSlider;