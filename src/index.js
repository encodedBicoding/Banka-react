import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.css';
import store from './store';

const root = document.getElementById('root');
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
render(
  <Router>
    <App store={store}/>
  </Router>,
  root
);

module.hot.accept();
