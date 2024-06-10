
import PropTypes from 'prop-types';
import bioPlantsImage from '../assets/bioPlantsImage.png';
import sustainabilityImage from '../assets/sustainabilityImage.png';
import handmadeImage from '../assets/handmadeImage.png';
import fastDeliveryImage from '../assets/fastDeliveryImage.png';

// ValueCard component to render individual value cards with links
function ValueCard({ src, alt, title, href }) {
  return (
    <article className="flex flex-col items-center p-4">
      <div className="flex flex-col grow justify-center p-5 mt-4 sm:mt-0">
        <a href={href} className="flex justify-center items-center">
          <img loading="lazy" src={src} alt={alt} className="w-2/3 h-auto" />
        </a>
        <div className="mt-5 text-2xl font-semibold leading-8 text-center text-teal-900">
          {title}
        </div>
      </div>
    </article>
  );
}

// Define prop types for ValueCard
ValueCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// ValuesSection component to render the section containing value cards
function ValuesSection() {
  const values = [
    {
      src: bioPlantsImage,
      alt: "An image representing Bio Plants",
      title: "Bio Plants",
      href: "#bio-plants",
    },
    {
      src: sustainabilityImage,
      alt: "An image representing Sustainability",
      title: "Sustainability",
      href: "#sustainability",
    },
    {
      src: handmadeImage,
      alt: "An image representing Handmade",
      title: "Handmade",
      href: "#handmade",
    },
    {
      src: fastDeliveryImage,
      alt: "An image representing Fast Delivery",
      title: "Fast Delivery",
      href: "#fast-delivery",
    },
  ];

  return (
    <section className="flex flex-col items-center px-4 md:px-16 pt-8 bg-white">
      <div className="flex flex-col items-center max-w-full w-full lg:w-[1030px]">
        {/* Section Header */}
        <header className="text-5xl font-bold text-lime-600 leading-[55.2px] tracking-[5.28px] text-center md:text-left max-md:text-4xl">
          WHAT MAKES US DIFFERENT
        </header>
        <h2 className="mt-5 text-4xl font-semibold leading-10 text-slate-800 text-center md:text-left">
          The values we live by
        </h2>
        {/* Value Cards Section */}
        <section className="flex flex-wrap justify-center md:justify-start self-stretch px-4 pt-20 mt-8 bg-white ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {/* Render Value Cards */}
            {values.map((value, index) => (
              <ValueCard key={index} src={value.src} alt={value.alt} title={value.title} href={value.href} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ValuesSection;