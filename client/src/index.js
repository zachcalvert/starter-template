
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@mui/material';

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
