import { css } from 'styled-components';
import { rem } from 'polished';

export const center = () => css`
  margin-left: auto;
  margin-right: auto;
`;

export const flexCentered = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumn = () => css`
  display: flex;
  flex-direction: column;
`;

export const flexSpaced = () => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexAround = () => css`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AdditionSymbol = () => css`
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${rem('20px')};
    height: ${rem('2px')};
  }
  &:after {
    transform: rotate(90deg);
  }
`;

export const Arrow = () => css`
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: ${rem('70px')};
  }
  &::before {
    width: var(--gap-great);
    height: var(--gap-smallest);
    background-color: var(--color-white);
    top: ${rem('7px')};
  }
  &::after {
    width: var(--gap-normal);
    height: var(--gap-normal);
    transform: rotateZ(225deg);
    border-left: var(--gap-smallest) solid white;
    border-bottom: var(--gap-smallest) solid white;
    left: ${rem('78px')};
    top: var(--gap-smallest);
  }
`;
