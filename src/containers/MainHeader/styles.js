/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { rem } from 'polished';
import { flexSpaced } from '../../styles/tools';

export const Header = styled.header`
  width: 100%;
  height: ${rem('70px')};
  background-color: var(--color-green-aqua);
  padding: 0 var(--gap-great);
  ${flexSpaced};
`;

export const Wrapper = styled.div``;
