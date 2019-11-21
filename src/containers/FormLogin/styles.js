import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Label = styled.label`
  font-size: var(--font-normal);
  margin-top: var(--gap-great);
  padding-left: var(--gap-small);
  color: var(--color-gray-dark);
`;

export const StyledLink = styled(Link)`
  color: var(--color-gray-dark);
  font-size: var(--font-small);
  text-align: ${({ Right }) => (Right ? 'right' : 'center')};
  margin: var(--gap-medium) 0;
`;

export const p = [];
