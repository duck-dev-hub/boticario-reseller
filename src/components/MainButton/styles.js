import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';

const Button = styled.button`
  cursor: pointer;
  ${({ Primary }) =>
    Primary &&
    css`
      background-color: var(--color-pink);
      color: var(--color-white);
      ${flexCentered};
      transition: background-color 0.4s ease-in-out 0s;
      display: flex;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: ${rem('1px')};
      padding: var(--gap-medium);
      border-radius: ${rem('30px')};
      cursor: pointer;
    `}
  /* ${({ Secondary }) =>
    Secondary &&
    css`
      background-color: var(--color-black);
      color: var(--color-white);
      ${flexCentered};
      border-radius: var(--gap-small);
      transition: background-color 0.4s ease-in-out 0s;
      display: flex;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: ${rem('1px')};
    `} */
`;

export default Button;
