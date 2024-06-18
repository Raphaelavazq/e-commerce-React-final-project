import { useNavigate } from 'react-router-dom';
import heroVideo from '../assets/herovideo.mp4'; // Adjust the import path as necessary

function Hero() {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/shop/all');
  };

  const handleLearnMoreClick = () => {
    navigate('/about');
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
              <source src={heroVideo} type="video/mp4" />
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
                onClick={handleShopNowClick}
                className="px-6 py-3 text-white bg-teal-900 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
              >
                Shop now
              </button>
              {/* Learn More Button */}
              <button 
                onClick={handleLearnMoreClick}
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

export default Hero;