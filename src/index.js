import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  store  from './Component/store';
import { Provider } from 'react-redux';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  
<BrowserRouter>
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
  </BrowserRouter>
  
);

