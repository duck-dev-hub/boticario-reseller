import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Main } from './styles';

import FormLogin from '../../containers/FormLogin/FormLogin';
import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';

const Login = () => {
  return (
    <>
      {useSelector(state =>
        state.userLogged === true ? <Redirect to="/" /> : null,
      )}
      <MainHeader />
      <Main>
        <FormLogin />
      </Main>
      <MainFooter />
    </>
  );
};

export default Login;
