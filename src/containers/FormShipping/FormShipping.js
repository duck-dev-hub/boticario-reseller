import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import Axios from 'axios';

import LinkForm from '../../components/LinkForm';
import FormModal from '../../components/FormModal/FormModal';
import InputName from '../../components/InputName';
import InputField from '../../components/InputField';
import MainButton from '../../components/MainButton';
import MessageModal from '../../components/MessageModal';

const FormShipping = () => {
  const [code, setCode] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [message, setMessage] = useState('');
  const [activeError, setActiveError] = useState('');
  const [activeSuccess, setActiveSuccess] = useState('');
  const [shipping, setShippings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const endpoint = 'http://localhost:8000/auth/login/shopping';
    const response = await Axios.get(endpoint);
    const { data } = response;
    return setShippings(data);
  };

  const handleAddShopping = async ev => {
    ev.preventDefault();
    setLoading(true);
    const verification =
      shipping.findIndex(test => test.code === code) !== -1;
    console.log(verification);
    const endpoint = 'http://localhost:8000/auth/login/shopping';
    try {
      if (!verification) {
        const response = await Axios.post(endpoint, {
          code,
          price,
          date,
        });
        const { data } = response;
        setLoading(false);
        setActiveError('');
        setActiveSuccess('-active');
        setMessage('Compra cadastrada');
        console.log(data);
        return data;
      }
      setActiveSuccess('');
      setActiveError('-active');
      setMessage('Compra já cadastrada!');
    } catch (error) {
      console.log('bar', error);
      setActiveSuccess('');
      setActiveError('-active');
      setMessage('Erro! Tente novamente');
    }
    return false;
  };

  useEffect(() => {
    if (!loading) {
      fetchData();
      setLoading(true);
    }
  });

  return (
    <FormModal
      onSubmit={ev => handleAddShopping(ev)}
      title="Cadastrar Compras"
    >
      <InputName content="Código do produto:" />
      <InputField
        type="text"
        placeholder="xxxxxxxx"
        required="required"
        onChange={ev => setCode(ev.target.value)}
      />
      <InputName content="Valor do produto:" />
      <InputField
        type="text"
        placeholder="R$ 1,000,000.00"
        required="required"
        onChange={ev => setPrice(ev.target.value)}
        as={NumberFormat}
        thousandsGroupStyle="pt-BR"
        prefix="R$"
        thousandSeparator={true}
      />
      <InputName content="Data da compra:" />
      <InputField
        type="text"
        as={NumberFormat}
        required="required"
        onChange={ev => setDate(ev.target.value)}
        format="##/##"
        placeholder="/MM/YY"
        mask={['M', 'M', 'Y', 'Y']}
      />
      <MainButton primary="true" type="submit" content="Cadastrar" />
      <LinkForm to="/minhas-compras" content="Ver Minhas Compras" />
      <MessageModal
        className={activeError}
        content={message}
        activeError={activeError}
        setActiveError={setActiveError}
        Error="true"
      />
      <MessageModal
        className={activeSuccess}
        content={message}
        activeSuccess={activeSuccess}
        setActiveSuccess={setActiveSuccess}
        Success="true"
      />
    </FormModal>
  );
};

export default FormShipping;
