import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import for ReactDOM
import App from './App.jsx';
import './index.css';

// Create a root and render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
