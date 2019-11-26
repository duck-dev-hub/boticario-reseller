import styled from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';
import Button from '../../components/MainButton/styles';

const Container = styled.main`
  width: 100vw;
  height: 80vh;
  ${flexCentered};
  flex-direction: column;
  margin-top: ${rem('70px')};
  ${Button} {
    margin-top: ${rem('25px')};
  }
`;

export default Container;
