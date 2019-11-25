import React from 'react';
// import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Main } from './styles';

import FormLogin from '../../containers/FormLogin/FormLogin';

const Login = () => {
  return (
    <Main>
      {useSelector(state =>
        state.userLogged === true
          ? console.log('Is logged', state)
          : console.log('not logged'),
      )}
      <FormLogin />
    </Main>
  );
};

export default Login;
