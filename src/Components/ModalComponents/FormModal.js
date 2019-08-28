import React from 'react';
import Form from '../FormComponent/Form';
import ResponseCard from '../ResponseComponent/ResponseCard';
import Error from '../ResponseComponent/Response';
import {connect} from 'react-redux';
import './Modal.css';

const FormModal = ({ title, type, history, response }) => {
  const handleFormToRender = (t) => {
    switch (t) {
    case 'signup':
      return(
        <Form
          title={title}
          type={type}
          history={history}
          inputs={[
            {
              name: 'Firstname',
              type: 'text'
            },
            {
              name: 'Lastname',
              type: 'text'
            },
            {
              name: 'email',
              type: 'email'
            },
            {
              name: 'password',
              type: 'password'
            },
            {
              name: 'confirm password',
              type: 'password'
            }
          ]}
        />
      )
    case 'login':
      return(
        <Form
          title={title}
          history={history}
          type={type}
          inputs={[
            { name: 'email', type: 'email' },
            { name: 'password', type: 'password' }
          ]}
        />
      )
    case 'create_account':
      return(
        <ResponseCard 
          body={response}
        />
      )
    default:
      return(
        <h1>No form to render</h1>
      )
    }
  } 
  return (
    <div id="modal" className="modal">
      <Error />
      <div className="modal-content">
        {
          handleFormToRender(type)
        }
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  response: state.apiCallReducer.response
})
export default connect(mapStateToProps)(FormModal);
