import styled from 'styled-components';
import { rem } from 'polished';
import BgcMobile from '../../assets/img/bg-revendedor-mobile.jpg';
import { flexCentered } from '../../styles/tools';
import Button from '../../components/MainButton/styles';

const Main = styled.main`
  background-image: url(${BgcMobile});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  ${flexCentered};
  & ${Button} {
    margin-top: ${rem('25px')};
  }
`;

export default Main;
