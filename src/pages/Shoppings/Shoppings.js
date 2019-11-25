import React from 'react';
import Container from './styles';

import FormShipping from '../../containers/FormShipping';

import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';

const Shoppings = () => {
  return (
    <>
      <MainHeader />
      <Container>
        <FormShipping />
      </Container>
      <MainFooter />
    </>
  );
};

export default Shoppings;
