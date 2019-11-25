import React, { useState } from 'react';
import { Header, Wrapper } from './styles';

import LogoHeader from '../../assets/img/logo-header.png';

import Figure from '../../objects/Figure';

import MainMenu from '../../components/MainMenu';
import IconBurgue from '../../components/IconBurgue';

const MainHeader = () => {
  const [active, setActive] = useState('');

  const handleToggle = () => {
    active === '-active' ? setActive('') : setActive('-active');
  };

  return (
    <>
      <Header>
        <Wrapper>
          <Figure>
            <img src={LogoHeader} alt="Revendedora Grupo Boticário" />
          </Figure>
        </Wrapper>
        <Wrapper>
          <IconBurgue className={active} onClick={handleToggle} />
        </Wrapper>
        <MainMenu className={active} />
      </Header>
    </>
  );
};

export default MainHeader;
