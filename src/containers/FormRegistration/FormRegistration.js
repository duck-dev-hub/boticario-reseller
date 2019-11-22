import React from 'react';

import FormModal from '../../components/FormModal/FormModal';
import InputField from '../../components/InputField';
import InputName from '../../components/InputName';
import LinkForm from '../../components/LinkForm';
import MainButton from '../../components/MainButton';
import MessageError from '../../components/MessageError';

const FormRegistration = () => {
  // const [name, setName] = useState('');
  // const [cpf, setCpf] = useState('');
  // const [email, setEmail] = useState('');
  // const [emailVerified, setEmailVerified] = useState('');
  // const [password, setPassword] = useState('');

  const handleRegistry = ev => {
    ev.preventDefault();
    console.log('foo');
  };

  return (
    <FormModal title="Cadastro">
      <InputName content="Nome completo" />
      <InputField type="Text" placeholder="Digite seu nome" />
      <InputName content="CPF" />
      <InputField
        type="text"
        placeholder="000.000.000-00"
        // onChange={e => setCpf(e.target.value)}
      />
      <InputName content="Email" />
      <InputField type="email" placeholder="exemplo@exemplo.com.br" />
      <InputName content="Senha" />
      <InputField type="password" placeholder="************" />
      <InputName content="Confirmar senha" />
      <InputField type="password" placeholder="************" />
      <MainButton
        Primary
        content="Cadastrar"
        onClick={ev => handleRegistry(ev)}
      />
      <LinkForm to="/" content="Entrar" />
      <MessageError content="Erro desconhecido" />
    </FormModal>
  );
};

export default FormRegistration;
