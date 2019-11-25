import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Menu, List, Item } from './styles';

const MainMenu = ({ className, onClick }) => (
  <Menu className={className}>
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      {useSelector(state =>
        state.userLogged === false ? (
          <>
            <Item>
              <Link to="/Login">Login</Link>
            </Item>
            <Item>
              <Link to="/cadastro">Seja uma revendedora</Link>
            </Item>
          </>
        ) : (
          <>
            <Item>
              <Link to="/minha-conta">Minha Conta</Link>
            </Item>
            <Item>
              <Link to="/compras">Cadastrar compras</Link>
            </Item>
            <Item onClick={onClick}>Sair</Item>
          </>
        ),
      )}
    </List>
  </Menu>
);

export default MainMenu;
