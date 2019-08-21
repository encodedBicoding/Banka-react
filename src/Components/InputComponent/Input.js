import React from 'react';

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      required={'required'}
      className={'form-content'}
    />
  );
};
export default Input;
