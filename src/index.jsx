import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { AuthProvider } from './context/authContext';
// import App1 from './app1';
import './style';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
