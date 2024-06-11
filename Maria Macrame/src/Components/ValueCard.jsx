import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import bioImage from '../assets/bio.svg';
import sustainabilityImage from '../assets/sustainability.svg';
import handmadeImage from '../assets/handmade.svg';
import deliveryImage from '../assets/delivery.svg';

// ValueCard component to render individual value cards with links and animations
function ValueCard({ src, alt, title, href }) {
  return (
    <motion.article
      className="value-card flex flex-col items-center p-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col grow justify-center p-5 mt-4 sm:mt-0">
        <a
          href={href}
          className="value-card-link flex justify-center items-center"
        >
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className="w-20 h-20"
          />
        </a>
        <div className="mt-5 text-2xl font-semibold leading-8 text-center text-teal-900">
          {title}
        </div>
      </div>
    </motion.article>
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
      src: bioImage,
      alt: 'An image representing Bio Plants',
      title: 'Bio Plants',
      href: '#bio-plants',
    },
    {
      src: sustainabilityImage,
      alt: 'An image representing Sustainability',
      title: 'Sustainability',
      href: '#sustainability',
    },
    {
      src: handmadeImage,
      alt: 'An image representing Handmade',
      title: 'Handmade',
      href: '#handmade',
    },
    {
      src: deliveryImage,
      alt: 'An image representing Fast Delivery',
      title: 'Fast Delivery',
      href: '#fast-delivery',
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
        <section className="flex flex-wrap justify-center md:justify-start self-stretch px-4 pt-20 mt-8 bg-white border-t border-solid border-slate-600">
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