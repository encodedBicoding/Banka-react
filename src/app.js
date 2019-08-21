import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';
import routes from './Routes';

const { Homepage } = routes;

const App = () => (
  <Provider store={store}>
    <Route path="/" component={Homepage} />
  </Provider>
);

export default App;
