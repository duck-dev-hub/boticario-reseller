import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: var(--color-gray-dark);
  font-size: var(--font-small);
  text-align: ${({ right }) => (right ? 'right' : 'center')};
  margin: var(--gap-medium) 0;
`;

export default StyledLink;
