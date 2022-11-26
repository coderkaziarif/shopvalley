import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline/>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

