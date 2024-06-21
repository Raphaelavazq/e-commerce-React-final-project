import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'; // Importing necessary icons from react-icons
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation

// Footer component definition
function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-40 py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left side */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg text-centered font-bold mb-4">
              <Link to="/">MARIA</Link> {/* Link to the homepage */}
            </h2>
            <h3 className="text-xl font-bold mb-2">Pages</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:flex-col">
              <li className="mb-2 underline md:mb-0"><Link to="/">Home</Link></li> {/* Link to Home page */}
              <li className="mb-2 underline md:mb-0"><Link to="/products/1">Shop</Link></li> {/* Link to Shop page */}
              <li className="mb-2 underline md:mb-0"><a href="#">Categories</a></li> {/* Placeholder link for Categories */}
              <li className="mb-2 underline md:mb-0"><Link to="/about">About us</Link></li> {/* Link to About us page */}
              <li className="mb-2 underline md:mb-0"><a href="#">Contact us</a></li> {/* Placeholder link for Contact us */}
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook"><FaFacebook /></a> {/* Link to Facebook */}
              <a href="#" aria-label="Instagram"><FaInstagram /></a> {/* Link to Instagram */}
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a> {/* Link to LinkedIn */}
              <a href="#" aria-label="Twitter"><FaTwitter /></a> {/* Link to Twitter */}
            </div>
          </div>
          {/* Right side */}
          <div className="md:text-centered mt-20">
            <h3 className="text-xl mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone /> {/* Phone icon */}
                <span>+91 123456789</span> {/* Phone number */}
              </li>
              <li className="flex underline items-center space-x-2">
                <FaEnvelope /> {/* Envelope icon */}
                <a href="mailto:info@mariamacrame.com">info@mariamacrame.com</a> {/* Email link */}
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt /> {/* Map marker icon */}
                <a href="https://www.google.com/maps?q=102-anywhere,+Road+City+name,+State,+136458" target="_blank" rel="noopener noreferrer">
                  102-anywhere, Road City name, State, 136458 {/* Address link */}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">
          made with <FaHeart className="inline-block" /> by Raphaella {/* Footer text with heart icon */}
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Exporting the Footer component

/* Explanation:

1. **Imports**:
   - CSS file for styling.
   - Icons from `react-icons`.
   - `Link` component from `react-router-dom` for navigation.

2. **Footer Component**:
   - Defined as a functional component.
   - Uses JSX to structure the footer content.

3. **Footer Structure**:
   - The footer is divided into two main sections: left and right.

4. **Left Side**:
   - Contains a heading with the brand name linked to the homepage.
   - Lists of links to various pages (Home, Shop, Categories, About us, Contact us).
   - Social media icons (Facebook, Instagram, LinkedIn, Twitter).

5. **Right Side**:
   - Contains contact information (phone number, email, address).
   - Uses icons for each type of contact information.

6. **Bottom Section**:
   - A small footer note indicating the creator with a heart icon.

7. **Styling**:
   - Classes from Tailwind CSS and custom CSS file (`Footer.css`) are used for styling.
   - Flexbox is used to arrange elements responsively.

8. **Export**:
   - The `Footer` component is exported for use in other parts of the application.

This `Footer` component is designed to provide essential links and contact information, styled for a consistent look across different screen sizes.
*/