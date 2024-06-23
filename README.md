# Maria  E-Commerce

This project is a plant webshop named Maria, which sells a variety of plants and macrame hangers. The site features a responsive design, ensuring optimal layout on various screen sizes, and interactive elements with hover states. It includes functionality for product listings, shopping cart management, user authentication with Google Sign-In, and a login page.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Installation and Setup](#installation-and-setup)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the site optimally on their device's screen size
- Experience hover states for all interactive elements
- Add items to the shopping cart
- View and manage the shopping cart
- Sign in with Google or skip the sign-in process


### Links

- Live Site URL: [[https://your-live-site-url.com](https://raphaelavazq.github.io/e-commerce-React-final-project/)](#)
- Figma File: [View Design in Figma]((https://www.figma.com/design/zp6efoo0pcCU0wmPOrz7NT/MARIA-MACRAME?t=5WYDEW0RA4n4K1N9-1))

## Installation and Setup

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository:**

    ~~~sh
    git clone https://github.com/Raphaelavazq/maria-macrame-ecommerce.git
    cd maria-macrame-ecommerce
    ~~~

2. **Install NPM packages:**

    ~~~sh
    npm install
    ~~~

### Running the Application

1. **Start the development server:**

    ~~~sh
    npm start
    ~~~
    
2. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```
3. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```
4. **Set up Firebase:**

    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Create a `.env` file in the root of your project and add your Firebase configuration. Firebase is needed for authentication and any database functionalities implemented with Firebase:

    ~~~env
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ~~~

5. **Start the development server:**

    ~~~sh
    npm run dev
    ~~~

6. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## My Process

I am currently building this project as the final assignment for the React and Storybook module of the UX/UI Engineer course at Bit-Beam Institute of Technology. The project has a one-month timeline, during which I am responsible for the entire process from the  UX process,Ux Design, Ui Designer, and Front end Development. 

### Built With

- React
- Tailwind CSS
- Firebase for authentication
- React Router for navigation
- Context API for state management

### What I Learned

This project is providing a comprehensive experience in building a modern e-commerce site. I am learning how to implement user authentication with Firebase, manage state using Context API, and ensure a responsive design with Tailwind CSS. Integrating various components and ensuring smooth navigation is a key learning point.

### Continued Development

As I continue to develop this project, I aim to:

- Enhance the user experience with more dynamic interactions using JavaScript.
- Explore server-side rendering with Next.js to improve performance.
- Integrate payment gateways for complete e-commerce functionality.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive resource for web development documentation.
- [CSS-Tricks](https://css-tricks.com) - Useful articles and guides on CSS techniques and responsive design.
- [Firebase Documentation](https://firebase.google.com/docs) - Detailed information on how to implement authentication and other Firebase services.
- [Tailwind cheat sheet]([https://firebase.google.com/docs](https://nerdcave.com/tailwind-cheat-sheet)) - Detailed and interactive Tailwind helper.

## Author

Rafaela Vaz   
Frontend Mentor - [@Raphaelavazq](https://www.frontendmentor.io/profile/Raphaelavazq)  
Github - [@Raphaelavazq](https://github.com/Raphaelavazq)

## Acknowledgments

I would like to thank the instructors and staff at Bit-Beam Institute of Technology for their guidance and support throughout the course.
Special thanks to all the open-source contributors whose libraries and tools made this project possible.
