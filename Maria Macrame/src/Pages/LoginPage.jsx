// src/components/LoginPage.jsx

// Importing necessary libraries and components
import { useState } from 'react'; // Importing useState hook for managing component state
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons from react-icons
import { signInWithPopup } from 'firebase/auth'; // Importing signInWithPopup function from Firebase
import { auth, provider } from '../firebase'; // Importing Firebase authentication and provider configuration
import leaf1 from '../assets/leaf1.png'; // Importing leaf decoration image
import leaf2 from '../assets/leaf2.png'; // Importing leaf decoration image
import './LoginPage.css'; // Importing CSS for the LoginPage component

// Defining the LoginPage component
export function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false); // State for managing password visibility
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur); // Function to toggle password visibility
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate('/'); // Redirect to the home page after successful login
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to handle Skip Sign-In
  const handleSkipSignIn = () => {
    navigate('/');
  };

  return (
    <section className="login-section">
      <img
        src={leaf1}
        alt="Leaf Decoration 1"
        className="leaf-decoration leaf1"
      />
      <img
        src={leaf2}
        alt="Leaf Decoration 2"
        className="leaf-decoration leaf2"
      />
      <div className="login-container">
        <h3 className="mb-2 text-3xl bold text-lime-600">Sign In</h3>
        <p className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to sign in
        </p>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-900">
              Your Email
            </label>
            <input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-900">
              Password
            </label>
            <input
              size="lg"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
              type={passwordShown ? 'text' : 'password'}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-6 right-3 flex items-center text-gray-500"
            >
              {passwordShown ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button className="w-full py-3 mb-2 text-white bg-teal-900 rounded-lg shadow-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-900">
            Sign in
          </button>
          <div className="mt-4 flex justify-end">
            <a href="#" className="font-medium underline text-blue-gray-700">Forgot password?</a>
          </div>
          <button
            type="button"
            className="w-full py-3 mt-6 flex items-center justify-center gap-2 text-white bg-lime-600 rounded-lg shadow-md hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="h-6 w-6" /> Sign in with Google
          </button>
          <button
            type="button"
            className="w-full py-3 mt-6 text-white bg-teal-900 rounded-lg shadow-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
            onClick={handleSkipSignIn}
          >
            Skip
          </button>
          <p className="mt-4 text-center text-sm text-zink-600">
            Not registered?{' '}
            <a href="#" className="font-medium text-lime-600">Create account</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;

/*
Explanation:

1. Imports:
   - Import necessary hooks, icons, Firebase functions, and assets.
   - `useState`, `useNavigate` for managing state and navigation.
   - `FaGoogle`, `FaEye`, `FaEyeSlash` for icons.
   - `signInWithPopup` for Firebase Google authentication.
   - CSS file for styling the LoginPage component.

2. Component Definition:
   - `LoginPage` component defined as a functional component.
   - Uses `useState` to manage the visibility of the password field.
   - `togglePasswordVisibility` function toggles the state of `passwordShown`.
   - `useNavigate` hook for navigation after successful login.

3. Google Sign-In:
   - `handleGoogleSignIn` function handles Google Sign-In using Firebase.
   - On successful sign-in, navigates to the home page.
   - On error, logs the error to the console.

4. Skip Sign-In:
   - `handleSkipSignIn` function navigates to the home page without signing in.

5. Render:
   - Renders a login section with leaf decorations, sign-in form, and buttons.
   - Sign-in form includes fields for email and password with a toggle button for password visibility.
   - Includes buttons for Google Sign-In and Skip Sign-In.
   - Uses CSS classes for styling and layout.

This setup provides a user-friendly login page with options for Google Sign-In, email/password login, and skipping the login process.
*/