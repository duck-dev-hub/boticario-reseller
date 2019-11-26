import styled from 'styled-components';
import { flexColumn } from '../../styles/tools';

export const List = styled.ul`
  ${flexColumn};
`;

export const Item = styled.li`
  width: 100%;
  background-color: var(--color-white);
  border-radius: var(--gap-small);
  margin: var(--gap-normal) 0;
  padding: var(--gap-medium);

  > dl {
    display: flex;
    align-items: center;
    &:not(:last-of-type) {
      margin-bottom: var(--gap-small);
    }
    > dt {
      font-size: var(--font-normal);
      color: var(--color-gray-dark);
    }
    > .cashback {
      color: var(--color-green-lighter);
    }
    > dd {
      font-size: var(--font-small);
      margin-left: var(--gap-small);
    }
  }
`;
