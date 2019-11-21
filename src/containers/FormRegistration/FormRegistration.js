import React from 'react';

import FormModal from '../../components/FormModal/FormModal';
import InputField from '../../components/InputField';
import InputName from '../../components/InputName';
import LinkForm from '../../components/LinkForm';
import MainButton from '../../components/MainButton';
import MessageError from '../../components/MessageError';

const FormRegistration = () => {
  return (
    <FormModal title="Cadastro">
      <InputName content="Nome completo" />
      <InputField type="Text" />
      <InputName content="CPF" />
      <InputField type="text" />
      <InputName content="Email" />
      <InputField type="email" />
      <InputName content="Senha" />
      <InputField type="password" />
      <InputName content="Confirmar senha" />
      <InputField type="password" />
      <MainButton Primary content="Cadastrar" />
      <LinkForm to="/" content="Entrar" />
      <MessageError content="Erro desconhecido" />
    </FormModal>
  );
};

export default FormRegistration;
