import { StrictMode, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

/* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
);
