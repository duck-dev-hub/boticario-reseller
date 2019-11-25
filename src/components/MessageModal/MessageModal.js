import React from 'react';
import { Container, Message, Close } from './styles';

const MessageModal = ({
  content,
  className,
  activeSuccess,
  setActiveSuccess,
  activeError,
  setActiveError,
  ...props
}) => {
  const handleClose = () => {
    if (setActiveError) {
      setActiveError('');
    } else {
      setActiveSuccess('');
    }
  };

  return (
    <Container
      className={(activeError, activeSuccess, className)}
      {...props}
    >
      <Message>{content}</Message>
      <Close onClick={handleClose}>X</Close>
    </Container>
  );
};

export default MessageModal;
