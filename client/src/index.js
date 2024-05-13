
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@mui/material';
import "@fontsource/poppins"; // Defaults to weight 400

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      TransitionComponent={Slide}
      maxSnack={3}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

reportWebVitals();
