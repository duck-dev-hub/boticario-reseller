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
      <InputField type="Text" placeholder="Digite seu nome" />
      <InputName content="CPF" />
      <InputField type="text" placeholder="000.000.000-00" />
      <InputName content="Email" />
      <InputField type="email" placeholder="exemplo@exemplo.com.br" />
      <InputName content="Senha" />
      <InputField type="password" placeholder="************" />
      <InputName content="Confirmar senha" />
      <InputField type="password" placeholder="************" />
      <MainButton Primary content="Cadastrar" />
      <LinkForm to="/" content="Entrar" />
      <MessageError content="Erro desconhecido" />
    </FormModal>
  );
};

export default FormRegistration;
