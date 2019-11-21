import React from 'react';
import Button from './styles';

const MainButton = ({ onClick, type, title, content, ...props }) => (
  <Button {...props} type={type} onClick={onClick} title={title}>
    {content}
  </Button>
);
export default MainButton;
