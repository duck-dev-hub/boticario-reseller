import React from 'react';
import { Form, Title } from './styles';

import Figure from '../../objects/Figure';

import LogoBot from '../LogoBot';

const FormModal = ({ title, children, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Figure>
      <LogoBot />
    </Figure>
    <Title>{title}</Title>
    {children}
  </Form>
);

export default FormModal;
