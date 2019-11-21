import styled from 'styled-components';
import { flexColumn, center } from '../../styles/tools';

import Img from '../LogoBot/styles';
import Button from '../MainButton/styles';

export const Form = styled.form`
  ${flexColumn};
  width: 75%;
  ${center}
  background-color: var(--color-white);
  border-radius: var(--gap-smallest);
  padding: var(--gap-medium);
  & ${Img} {
    display: block;
    margin: var(--gap-great) auto;
  }
  & ${Button} {
  }
`;

export const Title = styled.h3`
  font-size: var(--font-medium);
  font-weight: 500;
  color: var(--color-black);
  text-align: center;
`;
