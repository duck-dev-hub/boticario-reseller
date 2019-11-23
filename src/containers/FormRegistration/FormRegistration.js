import React, { useState } from 'react';

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
  const [activeSuccess, setActiveSucess] = useState('');

  const handleRegistry = ev => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      setActiveError('-active');
      setMessage('Senhas não são iguais');
      return;
    }
    setActiveSucess('-active');
    setMessage('Cadastro realizado com sucesso!');
    console.log('name', name);
    console.log('cpf', cpf);
    console.log('email', email);
    console.log('password', password);
    console.log('confirm Password', confirmPassword);
  };

  return (
    <FormModal onSubmit={handleRegistry} title="Cadastro">
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
      <LinkForm to="/" content="Entrar" />
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
        setActiveSuccess={setActiveSucess}
        Success
      />
    </FormModal>
  );
};

export default FormRegistration;
