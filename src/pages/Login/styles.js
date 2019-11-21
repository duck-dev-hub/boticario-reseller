import styled from 'styled-components';
import BgcMobile from '../../assets/img/bg-revendedor-mobile.jpg';
import { flexCentered } from '../../styles/tools';

export const Main = styled.main`
  background-image: url(${BgcMobile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  ${flexCentered};
`;

export const p = [];
