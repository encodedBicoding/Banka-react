import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../NavComponents/Navbar';
import FormModal from '../../ModalComponents/FormModal';
import HomeBody from '../HomeBodyComponent/HomeBody';

const Homepage = props => {
  return (
    <div>
      <Navbar
        home="Home"
        about="About"
        contact="Contact"
        signup="Sign Up"
        login="Log In"
      />
      {props.modal === 'SIGNUP' ? (
        <FormModal title="Sign up" type="signup" history={props.history}/>
      ) : props.modal === 'LOGIN' ? (
        <FormModal title="Log in" type="login" history={props.history}/>
      ) : (
        false
      )}
      <HomeBody />
    </div>
  );
};
const mapStateToProps = state => ({
  modal: state.modalReducer.modal
});
export default connect(mapStateToProps)(Homepage);
