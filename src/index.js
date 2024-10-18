import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-jc1gspehd87zds6q.us.auth0.com"; // Reemplaza por tu dominio de Auth0
const clientId = "mIGSmqOg2PH4O84wd3PnKOvBF5Td7e6W"; // Reemplaza por tu client ID de Auth0

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
