import React from 'react';
import { Form, Title } from './styles';

import Figure from '../../objects/Figure';

import LogoBot from '../LogoBot';

const FormModal = ({ title, children }) => (
  <Form>
    <Figure>
      <LogoBot />
    </Figure>
    <Title>{title}</Title>
    {children}
  </Form>
);

export default FormModal;
