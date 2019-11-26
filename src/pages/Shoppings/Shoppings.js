import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from './styles';

import FormShipping from '../../containers/FormShipping';
import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';

const Shoppings = () => {
  return (
    <>
      {useSelector(state =>
        state.userLogged === false ? <Redirect to="/login" /> : null,
      )}
      <MainHeader />
      <Container>
        <FormShipping />
      </Container>
      <MainFooter />
    </>
  );
};

export default Shoppings;
