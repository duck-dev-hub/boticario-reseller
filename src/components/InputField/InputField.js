import React from 'react';
import Input from './styles';

const InputField = ({ type, required }) => {
  return <Input type={type} required={required} />;
};

export default InputField;
