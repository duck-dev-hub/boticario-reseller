import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

import maskField from '../../helpers/maskField';

import FormModal from '../../components/FormModal/FormModal';
import InputField from '../../components/InputField';
import InputName from '../../components/InputName';
import LinkForm from '../../components/LinkForm';
import MainButton from '../../components/MainButton';
import MessageModal from '../../components/MessageModal';

const FormRegistration = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [activeError, setActiveError] = useState('');
  const [activeSuccess, setActiveSuccess] = useState('');
  const [sucess, setSucess] = useState(false);

  const registerUser = async () => {
    const endpoint = 'http://localhost:8000/auth/register';
    try {
      const response = await Axios.post(endpoint, {
        name,
        cpf,
        email,
        password,
      });
      const { data } = response;
      setActiveSuccess('-active');
      setMessage('Cadastro realizado com sucesso!');
      setTimeout(() => {
        setSucess(true);
      }, 1000);
      return data;
    } catch (error) {
      console.log('bar', error);
      setActiveError('-active');
      setMessage('Email e senha já cadastrados');
      return false;
    }
  };

  const handleRegistry = ev => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      setActiveSuccess('');
      setActiveError('-active');
      setMessage('Senhas não são iguais');
    } else if (cpf.length < 13) {
      setActiveSuccess('');
      setActiveError('-active');
      setMessage('CPF inválido');
    } else if (password.length < 6) {
      setActiveSuccess('');
      setActiveError('-active');
      setMessage('Senha muito fraca tente outra');
    } else {
      registerUser();
    }
  };

  return (
    <>
      {sucess ? (
        <Redirect to="/login" />
      ) : (
        <FormModal
          Logo
          onSubmit={ev => handleRegistry(ev)}
          title="Cadastro"
        >
          <InputName content="Nome completo" />
          <InputField
            type="Text"
            placeholder="Digite seu nome"
            required="required"
            onChange={e => setName(e.target.value)}
          />
          <InputName content="CPF" />
          <InputField
            type="text"
            placeholder="000.000.000-00"
            onKeyUp={e => maskField(e.target, '000.000.000-00', e)}
            onChange={e => setCpf(e.target.value)}
            maxLength="14"
            required="required"
          />
          <InputName content="Email" />
          <InputField
            type="email"
            placeholder="exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
            required="required"
          />
          <InputName content="Senha" />
          <InputField
            type="password"
            placeholder="************"
            onChange={e => setPassword(e.target.value)}
            required="required"
          />
          <InputName content="Confirmar senha" />
          <InputField
            type="password"
            placeholder="************"
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <MainButton Primary type="submit" content="Cadastrar" />
          <LinkForm to="/login" content="Entrar" />
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
      )}
    </>
  );
};

export default FormRegistration;
