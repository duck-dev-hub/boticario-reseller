import styled from 'styled-components';

const Burgue = styled.span`
  width: var(--gap-great);
  height: var(--gap-smallest);
  background-color: var(--color-white);
  display: block;
  position: relative;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    width: var(--gap-great);
    height: var(--gap-smallest);
    background-color: var(--color-white);
    display: block;
    position: absolute;
  }
  &::after {
    top: var(--gap-small);
  }
  &::before {
    bottom: var(--gap-small);
  }
  &.-active {
    transform: rotate(45deg);
    &::after {
      transform: rotate(90deg);
      top: 0;
    }
    &::before {
      transform: rotate(90deg);
      bottom: 0;
    }
  }
`;

export default Burgue;
