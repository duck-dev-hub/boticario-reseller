import styled from 'styled-components';
import { rem } from 'polished';
import { flexColumn } from '../../styles/tools';
import Banner from '../../assets/img/revendedora.jpg';

import Figure from '../../objects/Figure';
import Button from '../../components/MainButton/styles';

export const Container = styled.section`
  width: 100%;
  background-image: url(${Banner});
  background-size: 100%;
  background-repeat: no-repeat;
  height: calc(100vh - 70px);
  display: flex;
  align-items: flex-end;
`;

export const Content = styled.div`
  ${flexColumn};
  padding: 0 var(--gap-great);
  margin-bottom: var(--gap-big);
  ${Figure} {
    margin-bottom: var(--gap-medium);
    margin-top: ${rem('150px')};
  }
  & ${Button} {
    border-radius: ${rem('30px')};
    margin-top: var(--gap-medium);
  }
`;

export const Text = styled.p`
  font-size: var(--font-normal);
  font-family: 'Nunito';
  font-weight: 500;
  color: var(--color-white);
`;

export const p = [];
