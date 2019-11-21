import React, { useState } from 'react';
import { Container, Message, Close } from './styles';

const MessageError = ({ content, className }) => {
  const [active, setActive] = useState('');

  const handleClose = () => {
    setActive('');
    console.log('eae');
  };

  return (
    <Container className={(active, className)}>
      <Message>{content}</Message>
      <Close onClick={handleClose}>X</Close>
    </Container>
  );
};

export default MessageError;
