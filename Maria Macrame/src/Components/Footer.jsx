// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-40 py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg text-centered selection:font-bold mb-4">MARIA </h2>
            <h3 className="text-xl font-bold mb-2">Pages</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:flex-col">
              <li className="mb-2 underline md:mb-0"><a href="#">Home</a></li>
              <li className="mb-2 underline md:mb-0"><a href="#">Shop</a></li>
              <li className="mb-2 underline md:mb-0"><a href="#">Categories</a></li>
              <li className="mb-2 underline md:mb-0"><a href="#">About us</a></li>
              <li className="mb-2 underline md:mb-0"><a href="#">Contact us</a></li>
              
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
          {/* Right side */}
          <div className="md:text-centered mt-20">
            <h3 className="text-xl mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>+91 123456789</span>
              </li>
              <li className="flex underline items-center space-x-2">
                <FaEnvelope />
                <a href="mailto:info@mariamacrame.com">info@mariamacrame.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <a href="https://www.google.com/maps?q=102-anywhere,+Road+City+name,+State,+136458" target="_blank" rel="noopener noreferrer">
                  102-anywhere, Road City name, State, 136458
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          made with <FaHeart className="inline-block" /> by DevElla © all rights reserved 2024
        </div>
      </div>
    </footer>
  );
}

export default Footer;