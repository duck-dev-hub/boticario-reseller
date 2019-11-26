import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Main, Title } from './styles';
import Container from '../../layout/container';

import MainButton from '../../components/MainButton';
import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';
import ShippingsCards from '../../containers/ShippingsCards';

const RegisteredPurchases = () => {
  const [shippings, setShippings] = useState();

  const fetchData = async () => {
    const endpoint = 'http://localhost:8000/auth/login/shopping';
    try {
      const response = await Axios.get(endpoint);
      const { data } = response;
      return setShippings(data);
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainHeader />
      <Main>
        <Container>
          <Title>Minhas Compras</Title>
          {shippings ? (
            <>
              <ShippingsCards shippings={shippings} />
              <MainButton
                content="Cadastrar Compras"
                as={Link}
                to="/compras"
                primary="true"
              />
            </>
          ) : (
            <MainButton
              content="Cadastrar Compras"
              as={Link}
              to="/compras"
              primary="true"
            />
          )}
        </Container>
      </Main>
      <MainFooter />
    </>
  );
};

export default RegisteredPurchases;
