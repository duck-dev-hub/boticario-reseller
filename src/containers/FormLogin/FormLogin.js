import React, { useState } from 'react';
import Axios from 'axios';

import FormModal from '../../components/FormModal/FormModal';
import InputField from '../../components/InputField';
import InputName from '../../components/InputName';
import LinkForm from '../../components/LinkForm';
import MainButton from '../../components/MainButton';
import MessageError from '../../components/MessageError';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUser = async () => {
    const endpoint = 'http://localhost:8000/auth/login';
    try {
      const response = await Axios.post(endpoint, {
        email,
        password,
      });
      const { data } = response;
      console.log('foo', data);
      return data;
    } catch (error) {
      console.log('bar', error);
      return false;
    }
  };

  const handleLogin = ev => {
    ev.preventDefault();
    console.log('eae');
    getUser();
  };

  return (
    <FormModal onSubmit={ev => handleLogin(ev)} title="Login">
      <InputName content="Email" />
      <InputField
        type="email"
        required="required"
        onChange={ev => setEmail(ev.target.value)}
      />
      <InputName content="Senha" />
      <InputField
        type="password"
        required="required"
        onChange={ev => setPassword(ev.target.value)}
      />
      <LinkForm to="/" content="Esqueceu sua senha?" right="true" />
      <MainButton Primary type="submit" content="Entrar" />
      <MessageError content="Error ao realizar login" />
      <LinkForm to="/cadastro" content="Cadastro" />
    </FormModal>
  );
};

export default FormLogin;
