import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Text } from './styles';

import LogoReseller from '../../assets/img/logo-boticario-hero.png';

import Main from '../../objects/Main';
import Figure from '../../objects/Figure';

import MainFooter from '../../containers/MainFooter';
import MainHeader from '../../containers/MainHeader/MainHeader';
import MainButton from '../../components/MainButton';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Main>
        <Container>
          <Content>
            <Figure>
              <img
                src={LogoReseller}
                alt="Logo Revendedora Boticário"
              />
            </Figure>
            <Text>
              Acredite em você! Tenha uma renda extra trabalhando de
              casa.
            </Text>
            <MainButton
              Primary
              content="Seja uma revendedora"
              as={Link}
              to="/cadastro"
            />
          </Content>
        </Container>
      </Main>
      <MainFooter />
    </>
  );
};

export default Home;
