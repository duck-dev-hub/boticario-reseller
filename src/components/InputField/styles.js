import styled, { css } from 'styled-components';

const Input = styled.input`
  height: var(--gap-great);
  padding: var(--gap-small) 0;
  font-size: var(--font-small);
  border-bottom: var(--gap-smallest) solid var(--color-gray-lighter);
  transition: all 200ms ease-in-out;
  &:focus {
    border-color: var(--color-green-lighter);
  }
  &::-webkit-input-placeholder {
    font-size: 10px;
    color: #e3e3e5;
  }
  ${({ Icon }) => Icon && css``}
`;

export default Input;
