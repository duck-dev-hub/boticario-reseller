import React from 'react';
import { Container, Message, Close } from './styles';

const MessageError = ({ content }) => {
  return (
    <Container>
      <Message>{content}</Message>
      <Close>X</Close>
    </Container>
  );
};

export default MessageError;
