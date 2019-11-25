import React from 'react';
import Footer from './styles';

import Figure from '../../objects/Figure';
import LogoBot from '../../assets/img/logo-boticario.png';
import LogoGroup from '../../assets/img/logo-grupo.png';

const MainFooter = () => {
  return (
    <Footer>
      <Figure>
        <img src={LogoBot} alt="O Boticário" />
      </Figure>
      <Figure>
        <img src={LogoGroup} alt="Uma empresa do Grupo Boticário" />
      </Figure>
    </Footer>
  );
};

export default MainFooter;
