import React from 'react';
import Input from './styles';

const InputField = ({
  type,
  required,
  placeholder,
  onClick,
  onKeyUp,
  onChange,
  maxLength,
}) => {
  return (
    <Input
      type={type}
      required={required}
      placeholder={placeholder}
      onClick={onClick}
      onKeyUp={onKeyUp}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default InputField;
