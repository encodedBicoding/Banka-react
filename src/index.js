import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.css';

const root = document.getElementById('root');
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

module.hot.accept();
