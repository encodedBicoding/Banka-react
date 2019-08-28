import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from './Routes';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

const { 
  Homepage, 
  Dashboard, 
  NotFound, 
  CreateAccount 
} = routes;


const App = ({store}) => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={ Homepage } />
      <ProtectedRoute path='/profile' component={Dashboard}/>
      <ProtectedRoute path='/create' component={CreateAccount}/>
      <Route component={NotFound}></Route>
    </Switch>
  </Provider>
);

export default App;
