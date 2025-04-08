import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Add type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
const initGA = () => {
  // Create script for Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-VQV7BL0DVQ`;
  document.head.appendChild(script);

  // Add gtag code
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VQV7BL0DVQ');
  
  // Make gtag available globally
  window.gtag = gtag;
};

// Initialize GA only in production or when not in development
if (process.env.NODE_ENV !== 'development') {
  initGA();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
