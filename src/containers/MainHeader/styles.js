/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { rem } from 'polished';
import { flexSpaced } from '../../styles/tools';

export const Header = styled.header`
  width: 100%;
  height: ${rem('70px')};
  background-color: var(--color-green-aqua);
  padding: 0 var(--gap-great);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  ${flexSpaced};
`;

export const Wrapper = styled.div``;
