import styled from 'styled-components';
import { rem } from 'polished';
import { flexSpaced } from '../../styles/tools';

const Footer = styled.footer`
  width: 100%;
  height: ${rem('70px')};
  background-color: var(--color-green-darker);
  ${flexSpaced};
  padding: 0 var(--gap-great);
  box-sizing: border-box;
`;

export default Footer;
