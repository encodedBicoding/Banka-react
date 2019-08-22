import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';
import routes from './Routes';

const { Homepage, Dashboard } = routes;

const App = () => (
  <Provider store={store}>
    <Route exact path="/" component={Homepage} />
    <Route path="/profile" component={Dashboard}></Route>
  </Provider>
);

export default App;
