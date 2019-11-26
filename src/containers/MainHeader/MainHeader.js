import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Header, Wrapper } from './styles';

import LogoHeader from '../../assets/img/logo-header.png';

import Figure from '../../objects/Figure';

import MainMenu from '../../components/MainMenu';
import IconBurgue from '../../components/IconBurgue';

const MainHeader = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('');

  const handleToggle = () => {
    active === '-active' ? setActive('') : setActive('-active');
  };

  const handleLogout = () => {
    dispatch({
      type: 'LOG_OUT',
      userEmail: '',
      userToken: '',
    });
    setActive('');
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
        <MainMenu className={active} onClick={handleLogout} />
      </Header>
    </>
  );
};

export default MainHeader;
