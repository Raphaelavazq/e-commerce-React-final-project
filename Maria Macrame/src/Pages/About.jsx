// src/pages/About.jsx
import Navbar from '@components/Navbar';
import AboutHero from '@components/AboutHero';
import ValueCard from '@components/ValueCard';
import Subscription from '@components/Subscription';
import Footer from '@components/Footer';
import AboutSection from '@components/AboutSection';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutSection />
      <ValueCard />
      <Subscription />
      <Footer />

    </>
  );
};

export default About;