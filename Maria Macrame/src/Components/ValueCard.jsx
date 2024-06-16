import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import bioImage from '../assets/bio.svg';
import sustainabilityImage from '../assets/sustainability.svg';
import handmadeImage from '../assets/handmade.svg';
import deliveryImage from '../assets/delivery.svg';
import './ValueCard.css';

// ValueCard component to render individual value cards with links and animations
function ValueCard({ src, alt, title, href }) {
  return (
    <motion.article
      className="value-card"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col grow justify-center p-5 mt-2 sm:mt-0">
        <a href={href} className="value-card-link">
          <img loading="lazy" src={src} alt={alt} />
        </a>
        <div>{title}</div>
      </div>
    </motion.article>
  );
}

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
    <section className="values-section">
      <div className="flex flex-col items-center max-w-full w-full lg:w-[1030px]">
        <header className="section-header">WHAT MAKES US DIFFERENT</header>
        <h2>The values we live by</h2>
        <section className="flex flex-wrap justify-center md:justify-start self-stretch px-4   bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
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