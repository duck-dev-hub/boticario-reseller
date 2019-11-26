import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { flexCentered } from '../../styles/tools';

const Button = styled.button`
  cursor: pointer;
  ${({ primary }) =>
    primary &&
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
  ${({ secondary }) =>
    secondary &&
    css`
      text-decoration: underline;
      font-size: var(--font-small);
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
`;

export default Button;
