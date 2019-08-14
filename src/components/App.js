import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import homepageReducer from "../reducers/homepageReducer";
import routes from "../routes";
import { Route } from "react-router-dom";

const initialState = {
  homepageReducer: homepageReducer()
};
const reducer = (state = initialState, action) => {
  const {
    homepageReducer: { titleGreeting }
  } = state;

  return {
    homeTitle: titleGreeting
  };
};
const store = createStore(reducer);

const { Homepage } = routes;

const App = () => (
  <Provider store={store}>
    <Route path="/" component={Homepage} />
  </Provider>
);

export default App;
