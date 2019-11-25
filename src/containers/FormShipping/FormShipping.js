import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

import FormModal from '../../components/FormModal/FormModal';
import InputName from '../../components/InputName';
import InputField from '../../components/InputField';
import MainButton from '../../components/MainButton';

const FormShipping = () => {
  const [code, setCode] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();

  const handleAddShopping = ev => {
    ev.preventDefault();
    console.log(code, price, date);
  };

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
        thousandSeparator
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
      <MainButton Primary type="submit" content="Cadastrar" />
    </FormModal>
  );
};

export default FormShipping;
