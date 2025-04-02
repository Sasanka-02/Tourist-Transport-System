import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'c:/Users/Sithi/tourist-transport-system/tourist_transport._system/frontend/app';

// Enable console logs only in development mode
if (process.env.NODE_ENV === 'development') {
  console.log('Development mode enabled');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register Service Worker only in production
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => console.log('ServiceWorker registered:', registration))
      .catch((err) => console.error('ServiceWorker registration failed:', err));
  });
}
