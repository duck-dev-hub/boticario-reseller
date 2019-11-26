import styled from 'styled-components';
import { rem } from 'polished';
import Button from '../../components/MainButton/styles';
import { flexCentered } from '../../styles/tools';

export const Main = styled.main`
  margin-top: ${rem('70px')};
  width: 100vw;
  min-height: 80vh;
  ${flexCentered};
  & ${Button} {
    margin-top: var(--gap-great);
  }
`;

export const Title = styled.h2`
  font-size: var(--font-medium);
  font-weight: 500;
  text-align: center;
  margin-top: var(--gap-great);
`;
