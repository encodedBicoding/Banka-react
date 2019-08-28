import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


const ProtectedRoute = ({component,history, dispatch, ...rest}) => {
  const bool = window.localStorage.getItem('__banka__token');
  const Component = component;
  if(!bool) {
    history.push('/');
    dispatch({ type: 'LOGIN_MODAL', path: rest.path});
    return false;
  }
  return (
    <Component history={history}/>
  )
}
export default connect()(withRouter(ProtectedRoute));
