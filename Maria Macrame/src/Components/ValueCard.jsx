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
    // Motion component from framer-motion to add animation
    <motion.article
      className="value-card"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col grow justify-center p-5 mt-2 sm:mt-0">
        {/* Link wrapping the image */}
        <a href={href} className="value-card-link">
          <img loading="lazy" src={src} alt={alt} />
        </a>
        <div>{title}</div>
      </div>
    </motion.article>
  );
}

// PropTypes validation to ensure the correct prop types are passed
ValueCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

// ValuesSection component to render the section containing value cards
function ValuesSection() {
  // Array of value objects to be rendered as value cards
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
        {/* Section header */}
        <header className="section-header">WHAT MAKES US DIFFERENT</header>
        <h2>The values we live by</h2>
        <section className="flex flex-wrap justify-center md:justify-start self-stretch px-4 bg-white">
          {/* Grid container for value cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {/* Map through the values array and render ValueCard components */}
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

/*
Explanation:

1. Imports:
   - `PropTypes` for prop validation and `motion` from `framer-motion` for animations.
   - Image assets for the value cards.
   - CSS for styling.

2. ValueCard Component:
   - A functional component that renders individual value cards.
   - Uses `motion.article` to apply animations from `framer-motion`.
   - Animations include initial opacity and scale, with transitions to full opacity and scale.
   - Renders an image and a title wrapped in a link.

3. PropTypes Validation:
   - Ensures that the props `src`, `alt`, `title`, and `href` are passed to the `ValueCard` component and are of the correct types.

4. ValuesSection Component:
   - Contains an array of value objects, each representing a value card with an image, alt text, title, and link.
   - Renders a section containing the value cards.
   - Uses a grid layout to display value cards responsively (1 column on small screens, 2 on medium, and 4 on large screens).
   - Maps through the `values` array to create `ValueCard` components for each value.

5. Export:
   - Exports the `ValuesSection` component for use in the application.

This setup modularizes the rendering of value cards, making it easy to manage and extend. The `framer-motion` library adds animations, enhancing the user experience.
*/