import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { DBContextProvider } from './DB/DBContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DBContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DBContextProvider>
);