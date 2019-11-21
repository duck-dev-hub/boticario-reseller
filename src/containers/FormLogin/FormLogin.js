import React from 'react';

import FormModal from '../../components/FormModal/FormModal';
import InputField from '../../components/InputField';
import InputName from '../../components/InputName';
import LinkForm from '../../components/LinkForm';
import MainButton from '../../components/MainButton';
import MessageError from '../../components/MessageError';

const FormLogin = () => {
  return (
    <FormModal title="Login">
      <InputName content="Email" />
      <InputField type="email" required />
      <InputName content="Senha" />
      <InputField type="password" />
      <LinkForm to="/" content="Esqueceu sua senha?" right="true" />
      <MainButton Primary type="submit" content="Entrar" />
      <MessageError content="Error ao realizar login" />
      <LinkForm to="/" content="Cadastro" />
    </FormModal>
  );
};

export default FormLogin;
