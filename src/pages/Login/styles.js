import styled from 'styled-components';
import { rem } from 'polished';
import BgcMobile from '../../assets/img/bg-revendedor-mobile.jpg';
import { flexCentered } from '../../styles/tools';

export const Main = styled.main`
  background-image: url(${BgcMobile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin-top: ${rem('70px')};
  ${flexCentered};
`;

export const p = [];
