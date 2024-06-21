import { motion } from 'framer-motion'; // Importing framer-motion for animations

const HomeBlog = () => {
  return (
    <section className="bg-white text-pretty w-full flex flex-col items-center">
      <motion.header
        className="flex flex-col items-center bg-white w-full max-w-7xl px-4 md:px-16"
        initial={{ opacity: 0, y: 50 }} // Initial animation state: opacity 0 and translate 50px along y-axis
        animate={{ opacity: 1, y: 0 }} // Final animation state: opacity 1 and translate back to original position
        transition={{ duration: 0.5 }} // Duration of the animation is 0.5 seconds
      >
        <div className="w-full flex flex-col items-center py-16">
          <h1 className="text-5xl font-bold text-teal-900">Botanical Blog</h1> {/* Main blog title */}
          <h2 className="text-4xl text-lime-600 mt-8">Green Insights</h2> {/* Subtitle */}
        </div>
      </motion.header>

      <motion.div
        className="w-full flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 py-8"
        initial={{ opacity: 0 }} // Initial animation state: opacity 0
        animate={{ opacity: 1 }} // Final animation state: opacity 1
        transition={{ duration: 0.7 }} // Duration of the animation is 0.7 seconds
      >
        <div className="flex flex-col w-full md:w-1/2 md:pr-8 items-center md:items-start">
          <h3 className="text-3xl font-semibold text-teal-900 mb-4 text-center md:text-left">
            The Art of Macramé: <br /> A Beginner’s Guide
          </h3> {/* Article title */}
          <p className="text-lg text-zinc-500 mb-4 text-center md:text-left">
            An introductory article about the history, techniques, and basic knots used in macramé.
          </p> {/* Article description */}
          <button
            className="px-6 py-3 text-white bg-teal-900 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
            tabIndex="0"
          >
            Read more
          </button> {/* Read more button */}
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ff3bef6881d78bd52a046cf92c188fc4958ff5df4f0e71646b41e5b8967db9a?apiKey=0bd28f9e8acc4abb9f13a67eccfbb225&"
            alt="Botanical Image"
            className="w-full rounded-lg"
          /> {/* Botanical image */}
        </div>
      </motion.div>

      <motion.div
        className="w-full flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 py-8"
        initial={{ opacity: 0 }} // Initial animation state: opacity 0
        animate={{ opacity: 1 }} // Final animation state: opacity 1
        transition={{ duration: 0.9 }} // Duration of the animation is 0.9 seconds
      >
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e38cc0747025c4687a546fdb82ee5b805c25da383f10c0942ab1ad59cdfb6d?apiKey=0bd28f9e8acc4abb9f13a67eccfbb225&"
            alt="Living Room"
            className="w-full rounded-lg"
          /> {/* Living room image */}
        </div>
        <div className="flex flex-col w-full md:w-1/2 md:pl-8 order-1 md:order-2 items-center md:items-start">
          <h3 className="text-3xl font-semibold text-teal-900 mb-4 text-center md:text-left">
            Houseplants <br /> That Purify the Air
          </h3> {/* Article title */}
          <p className="text-lg text-zinc-500 mb-4 text-center md:text-left">
            Information about plants known for their air-purifying qualities and how to care for them.
          </p> {/* Article description */}
          <button
            className="px-6 py-3 text-white bg-teal-900 rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
            tabIndex="0"
          >
            Read more
          </button> {/* Read more button */}
        </div>
      </motion.div>
    </section>
  );
};

export default HomeBlog;

/* Explanation:

1. **Imports**:
   - `motion` from `framer-motion` is imported to handle animations.
   
2. **HomeBlog Component**:
   - Defined as a functional component.

3. **Header Section**:
   - `motion.header` is used to animate the header section with an initial opacity of 0 and y-axis translation of 50, animating to opacity 1 and y-axis translation to 0 over 0.5 seconds.

4. **Main Content**:
   - The main content is divided into two `motion.div` sections, each containing an image and associated text.
   - Both sections animate their opacity from 0 to 1 over different durations.

5. **First Article Section**:
   - Contains the title "The Art of Macramé: A Beginner’s Guide" with a brief description.
   - Includes a "Read more" button styled with Tailwind CSS classes.
   - Displays an image associated with the article.

6. **Second Article Section**:
   - Contains the title "Houseplants That Purify the Air" with a brief description.
   - Includes a "Read more" button styled with Tailwind CSS classes.
   - Displays an image associated with the article.

7. **Styling and Responsiveness**:
   - Tailwind CSS classes are used to style the components.
   - The layout adapts to different screen sizes using responsive design principles (flexbox, media queries).

8. **Animations**:
   - `framer-motion` is used to animate the header and article sections, creating a smooth transition effect as the elements come into view.

The `HomeBlog` component is designed to showcase blog articles with engaging animations and responsive design, enhancing the user experience on the homepage.
*/