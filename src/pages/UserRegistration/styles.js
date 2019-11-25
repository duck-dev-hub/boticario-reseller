import styled from 'styled-components';
import { rem } from 'polished';
import BgcMobile from '../../assets/img/bg-revendedor-mobile.jpg';
import { flexCentered } from '../../styles/tools';
import Button from '../../components/MainButton/styles';

const Main = styled.main`
  background-image: url(${BgcMobile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: calc(100vh + 70px);
  padding-top: ${rem('70px')};
  ${flexCentered};
  & ${Button} {
    margin-top: ${rem('25px')};
  }
`;

export default Main;
