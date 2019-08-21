import React from 'react';
import Form from '../FormComponent/Form';
import Error from '../ResponseComponent/Response';
import './Modal.css';

const FormModal = ({ title, type }) => {
  return (
    <div id="modal" className="modal">
      <Error />
      <div className="modal-content">
        {type === 'signup' ? (
          <Form
            title={title}
            type={type}
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
        ) : (
          <Form
            title={title}
            type={type}
            inputs={[
              { name: 'email', type: 'email' },
              { name: 'password', type: 'password' }
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default FormModal;
