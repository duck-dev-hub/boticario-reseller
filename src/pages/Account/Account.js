import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { Main, Title, Card } from './styles';

import Container from '../../layout/container';

import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';

const Account = () => {
  const userEmail = useState(useSelector(state => state.userEmail));
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [sumCashback, setSumCashback] = useState();
  const [lastBuy, setLastBuy] = useState();

  const getDataUser = async () => {
    const endpoint = 'http://localhost:8000/auth/login/users';
    try {
      const response = await Axios.get(endpoint);
      const { data } = response;
      const currentUser = data.findIndex(
        index => index.email === userEmail[0],
      );
      setName(data[currentUser].name);
      setCpf(data[currentUser].cpf);
      setPassword(data[currentUser].password);
      return;
    } catch (error) {
      console.log('bar', error);
    }
  };

  const getCashback = async () => {
    const endpoint = 'http://localhost:8000/auth/login/shopping';
    try {
      const response = await Axios.get(endpoint);
      const { data } = response;
      if (data.length) {
        const result = data
          .map(({ price }, index) => {
            const formated = price.replace(/\D/g, '');
            if (index === data.length - 1) {
              setLastBuy(
                (
                  (parseInt(price.replace(/\D/g, ''), 10) * 10) /
                  100
                ).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'BRL',
                }),
              );
            }
            return parseInt(formated, 10);
          })
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
          );
        const calc = (result * 10) / 100;
        return setSumCashback(
          calc.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  useEffect(() => {
    getDataUser();
    getCashback();
  }, []);

  return (
    <>
      {useSelector(state =>
        state.userLogged === false ? <Redirect to="/login" /> : null,
      )}
      <MainHeader />
      <Main>
        <Container>
          <Title>Meus Dados</Title>
          <Card>
            <dl>
              <dt>Nome:</dt>
              <dd>{name}</dd>
            </dl>
            <dl>
              <dt>CPF:</dt>
              <dd>{cpf}</dd>
            </dl>
            <dl>
              <dt>Senha:</dt>
              <dd>{password}</dd>
            </dl>
            {sumCashback && (
              <>
                <dl>
                  <dt className="last-cashback">
                    Cashback última compra:
                  </dt>
                  <dd>{lastBuy}</dd>
                </dl>
                <dl>
                  <dt className="cashback">Cashback Acumulado:</dt>
                  <dd>{sumCashback}</dd>
                </dl>
              </>
            )}
          </Card>
        </Container>
      </Main>
      <MainFooter />
    </>
  );
};

export default Account;
