import styled from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';

export const Main = styled.main`
  min-height: calc(100vh - 70px);
  padding-top: ${rem('70px')};
  ${flexCentered};
`;
export const Title = styled.h2`
  font-size: var(--font-medium);
  font-weight: 500;
  text-align: center;
  margin-top: var(--gap-great);
`;

export const Card = styled.div`
  width: 100%;
  background-color: var(--color-white);
  border-radius: var(--gap-small);
  margin-top: var(--gap-great);
  padding: var(--gap-great);
  > dl {
    display: flex;
    align-items: center;
    &:not(:last-of-type) {
      margin-bottom: var(--gap-small);
    }
    &:nth-child(3) {
      margin-bottom: ${rem('30px')};
    }
    > dt {
      font-size: var(--font-normal);
      color: var(--color-gray-dark);
    }
    > .cashback {
      color: var(--color-green-lighter);
    }
    > .last-cashback {
      color: var(--color-green-aqua);
    }
    > dd {
      font-size: var(--font-small);
      margin-left: var(--gap-small);
    }
  }
`;
