import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primeflex/primeflex.css';                                  
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <Auth0Provider
      domain="dev-nlyrty2tetke5i5r.us.auth0.com"
      clientId="3rGB9uB0BI8nP7WDCpXqfsRjEuKkI6bW"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
  >
        <App />
      </Auth0Provider>
    </PrimeReactProvider>
  </React.StrictMode>,
)
