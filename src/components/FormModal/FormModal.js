import React from 'react';
import { Form, Title } from './styles';

import Figure from '../../objects/Figure';

import LogoBot from '../LogoBot';

const FormModal = ({ title, children, onSubmit, Logo }) => (
  <Form onSubmit={onSubmit}>
    {Logo ? (
      <Figure>
        <LogoBot />
      </Figure>
    ) : null}
    <Title>{title}</Title>
    {children}
  </Form>
);

export default FormModal;
