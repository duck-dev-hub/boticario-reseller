import React from 'react';
import Input from './styles';

const InputField = ({ type, required, placeholder }) => {
  return (
    <Input
      type={type}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default InputField;
