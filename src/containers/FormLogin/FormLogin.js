import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

import FormModal from '../../components/FormModal/FormModal';
import InputField from '../../components/InputField';
import InputName from '../../components/InputName';
import LinkForm from '../../components/LinkForm';
import MainButton from '../../components/MainButton';
import MessageModal from '../../components/MessageModal';

const FormLogin = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [activeError, setActiveError] = useState('');
  const [activeSuccess, setActiveSuccess] = useState('');

  const getUser = async () => {
    const endpoint = 'http://localhost:8000/auth/login';
    try {
      const response = await Axios.post(endpoint, {
        email,
        password,
      });
      const { data } = response;
      setActiveSuccess('-active');
      setMessage('Login realizado com sucesso!');
      setTimeout(() => {
        dispatch({
          type: 'LOG_IN',
          userEmail: email,
          userToken: data.ACCESS_TOKEN,
        });
      }, 1500);
      return data;
    } catch (error) {
      setActiveError('-active');
      setMessage('Email ou senha incorreto');
      console.log('bar', error);
      return false;
    }
  };

  const handleLogin = ev => {
    ev.preventDefault();
    getUser();
  };

  return (
    <FormModal onSubmit={ev => handleLogin(ev)} title="Login" Logo>
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
      <LinkForm to="/cadastro" content="Cadastro" />
      <MessageModal
        className={activeError}
        content={message}
        activeError={activeError}
        setActiveError={setActiveError}
        Error
      />
      <MessageModal
        className={activeSuccess}
        content={message}
        activeSuccess={activeSuccess}
        setActiveSuccess={setActiveSuccess}
        Success
      />
    </FormModal>
  );
};

export default FormLogin;
