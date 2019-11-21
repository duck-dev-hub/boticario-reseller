import styled, { css } from 'styled-components';

const Input = styled.input`
  height: var(--gap-great);
  padding: 0 var(--gap-small);
  font-size: var(--font-small);
  border-bottom: var(--gap-smallest) solid var(--color-gray-lighter);
  transition: all 200ms ease-in-out;
  &:focus {
    border-color: var(--color-green-lighter);
  }
  ${({ Icon }) => Icon && css``}
`;

export default Input;
