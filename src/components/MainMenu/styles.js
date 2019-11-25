import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';

export const Menu = styled.nav`
  position: fixed;
  left: 0;
  top: ${rem('70px')};
  width: 80vw;
  background-color: var(--color-green-aqua);
  height: 100vh;
  z-index: 2;
  transition: all 300ms ease-in-out;
  transform: translateX(-150%);
  &.-active {
    transform: translateX(0);
  }
`;

export const List = styled.ul`
  ${flexColumn};
  padding-left: var(--gap-great);
`;

export const Item = styled.li`
  color: var(--color-white);
  margin: var(--gap-normal) 0;
  text-transform: uppercase;
  letter-spacing: ${rem('0.5px')};
`;
