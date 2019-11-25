import React from 'react';
import { Header, Wrapper } from './styles';

import LogoHeader from '../../assets/img/logo-header.png';

import Figure from '../../objects/Figure';

const MainHeader = () => {
  return (
    <>
      <Header>
        <Wrapper>
          <Figure>
            <img src={LogoHeader} alt="Revendedora Grupo Boticário" />
          </Figure>
        </Wrapper>
      </Header>
    </>
  );
};

export default MainHeader;
