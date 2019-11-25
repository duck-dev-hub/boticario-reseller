import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const Close = styled.span`
  position: absolute;
  right: ${rem('-8px')};
  top: ${rem('-11px')};
  width: ${rem('25px')};
  height: ${rem('25px')};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${rem('13px')};
  cursor: pointer;
`;

export const Container = styled.div`
  padding: var(--gap-normal);
  margin: 0 auto;
  position: fixed;
  bottom: var(--gap-medium);
  left: 50%;
  transform: translate(-50%, 250%);
  width: 85%;
  transition: all 200ms linear;
  &.-active {
    transform: translate(-50%, 0%);
    display: block;
  }
  ${({ Error }) =>
    Error &&
    css`
      background: var(--color-red-lighter);
      border-radius: var(--gap-small);
      border: 1px solid var(--color-red);
      color: var(--color-red);
      & ${Close} {
        background: var(--color-red-lighter);
        border: var(--gap-smallest) solid red;
      }
    `}
  ${({ Success }) =>
    Success &&
    css`
      background: #a9ff56;
      border-radius: var(--gap-small);
      border: 1px solid var(--color-green-darken);
      color: var(--color-green-darker);
      & ${Close} {
        background: #a9ff56;
        border: var(--gap-smallest) solid var(--color-green-darken);
      }
    `}
`;

export const Message = styled.p`
  font-size: var(--font-small);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: ${rem('0.5px')};
  text-align: center;
`;
