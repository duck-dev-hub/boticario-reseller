import styled from 'styled-components';
import { rem } from 'polished';

export const Container = styled.div`
  color: var(--color-red);
  padding: var(--gap-normal);
  margin: 0 auto;
  position: absolute;
  bottom: var(--gap-medium);
  left: 50%;
  transform: translate(-50%, 200%);
  width: 85%;
  background: var(--color-red-lighter);
  border-radius: var(--gap-small);
  border: 1px solid var(--color-red);
  transition: all 200ms linear;
  &.-active {
    transform: translate(-50%, 0%);
  }
`;

export const Message = styled.p`
  font-size: var(--font-small);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: ${rem('0.5px')};
  text-align: center;
`;

export const Close = styled.span`
  position: absolute;
  right: ${rem('-8px')};
  top: ${rem('-11px')};
  background: var(--color-red-lighter);
  width: ${rem('25px')};
  height: ${rem('25px')};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${rem('13px')};
  border: var(--gap-smallest) solid red;
  cursor: pointer;
`;
