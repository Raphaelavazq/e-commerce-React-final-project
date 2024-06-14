import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import App from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);