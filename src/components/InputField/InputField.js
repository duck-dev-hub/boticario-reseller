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
  value,
  pattern,
  ...props
}) => {
  return (
    <Input
      {...props}
      type={type}
      required={required}
      placeholder={placeholder}
      onClick={onClick}
      onKeyUp={onKeyUp}
      onChange={onChange}
      maxLength={maxLength}
      pattern={pattern}
      value={value}
    />
  );
};

export default InputField;
