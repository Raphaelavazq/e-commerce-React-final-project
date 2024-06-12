import heroImage from '../assets/hero-img.png';

function Hero() {
  return (
    <section className="pb-3 bg-white flex flex-col items-center">
      <div className="flex gap-5 flex-col-reverse md:flex-row w-full max-w-7xl px-4 md:px-12">
        {/* Text Content */}
        <div className="flex flex-col w-full md:w-[50%]">
          <div className="flex flex-col font-medium mt-10 md:mt-0">
            <h1 className="md:px-0.5 md:pt-40 text-4xl md:text-6xl leading-[66px] md:leading-[97px] text-stone-800">
              Maria&apos;s Boho <br /> Botanicals
            </h1>
            <div className="flex gap-3.5 justify-start mt-8 text-sm">
              {/* Shop Now Button */}
              <button className="px-6 py-3 text-white bg-teal-900 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50" tabIndex="0">
                Shop now
              </button>
              {/* Learn More Button */}
              <button className="px-6 py-3 text-white bg-lime-600 rounded-md shadow-sm hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-opacity-50" tabIndex="0">
                Learn more
              </button>
            </div>
          </div>
        </div>
        {/* Image Content */}
        <div className="flex w-full md:w-[57%]">
          <img
            loading="lazy"
            src={heroImage}
            className="w-full h-auto"
            alt="Maria’s Boho Botanicals"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;