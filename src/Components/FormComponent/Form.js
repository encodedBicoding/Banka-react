import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../InputComponent/Input';
import handleFormSubmit from './handleFormSubmit';
import './Form.css';

const Form = (
  { 
    showSignupModal, 
    showLoginModal, 
    closeFormModal, 
    type, 
    inputs, 
    title,
    isFetching 
  }) => {
  const [formError, setFormError] = useState({
    isError: false,
    type: '',
    errorMessage: ''
  });
 
  const [signupFields, setSetupFields] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm: ''
  });
  const checkFetching = (initialLoadstate) => {
    if(isFetching) return 'Loading...';
    return initialLoadstate
  }
  const checkFormError = (bool, type, message) =>
    setFormError({
      ...formError,
      isError: bool,
      type: type,
      errorMessage: message
    });

  const handleChange = e => {
    switch (e.target.name) {
    case 'firstname':
      const fnregex = /^[a-zA-Z]+$/g;
      if (!fnregex.test(e.target.value)) {
        checkFormError(
          true,
          e.target.name,
          'firstname can only be alphabets'
        );
      } else {
        checkFormError(false, '', '');
      }
      setSetupFields({ ...signupFields, firstname: e.target.value });
      break;
    case 'lastname':
      const lnregex = /^[a-zA-Z]+$/g;
      if (!lnregex.test(e.target.value)) {
        checkFormError(true, e.target.name, 'lastname can only be alphabers');
      } else {
        checkFormError(false, '', '');
      }
      setSetupFields({ ...signupFields, lastname: e.target.value });
      break;
    case 'email':
      setSetupFields({ ...signupFields, email: e.target.value });
      break;
    case 'password':
      const psregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!psregex.test(e.target.value)) {
        checkFormError(
          true,
          e.target.name,
          'Password must contain special characters and have length of 8 digits'
        );
      } else {
        checkFormError(false, '', '');
      }
      setSetupFields({ ...signupFields, password: e.target.value });
      break;
    case 'confirm password':
      if (e.target.value !== signupFields.password) {
        checkFormError(true, e.target.name, 'Passwords do not match');
      } else {
        checkFormError(false, '', '');
      }
      setSetupFields({ ...signupFields, confirm: e.target.value });
      break;
    default:
      setSetupFields({ ...signupFields });
    }
  };
  if (inputs.length <= 0) return <h1>Please add inputs</h1>;
  return (
    <div className="form modal-content">
      <span className="close" onClick={closeFormModal}>
        &times;
      </span>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <h3 className="form-header">{title}</h3>
        {inputs.map((input, idx) => (
          <div key={idx} className="form-input">
            <Input
              type={input.type}
              name={input.name.toLowerCase()}
              placeholder={input.name}
              onChange={handleChange}
              value={signupFields[input.name.toLowerCase()]}
            />
            {formError.isError &&
            formError.type === input.name.toLowerCase() ? (
                <p className="inputError">{formError.errorMessage}</p>
              ) : (
                <p />
              )}
          </div>
        ))}
        <button
          type="submit"
          className={
            formError.isError
              ? 'btn-submit form-content disabled'
              : 'btn-submit form-content'
          }
          disabled={formError.isError ? 'disabled' : ''}
        >
          {type === 'signup'
            ? checkFetching('Sign up')
            : type === 'login'
              ? checkFetching('Log in')
              : type}
        </button>
      </form>
      <div className="have-account">

        {
          type === 'signup' ? 
            <p>
                    Already have an account? <a href='javascript::void' onClick={showLoginModal}>Log in</a>
            </p>
            :
            <p>
                    New to Banka? <a href='javascript::void' onClick={showSignupModal}>Sign up</a>
            </p>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.apiCallReducer.isFetching
});

const mapDispatchToProps = dispatch => ({
  showLoginModal: () => dispatch({type: 'LOGIN_MODAL'}),
  showSignupModal: () => dispatch({type: 'SIGNUP_MODAL'}),
  closeFormModal: () => dispatch({type: 'CLOSE_MODAL'}),
  requestSignupAUser: () => dispatch({ type: 'SIGNUP_LOADING'}),
  requestLoginAUser: () => dispatch({ type: 'LOGIN_LOADING'})
})
export default connect(mapStateToProps, mapDispatchToProps)(Form);
