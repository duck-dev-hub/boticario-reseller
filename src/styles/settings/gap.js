import { css } from 'styled-components';
import { rem } from 'polished';

const GlobalGap = css`
  :root {
    --gap-smallest: ${rem('2px')};
    --gap-small: ${rem('5px')};
    --gap-normal: ${rem('10px')};
    --gap-medium: ${rem('15px')};
    --gap-great: ${rem('20px')};
    --gap-big: ${rem('40px')};
    --gap-biggest: ${rem('50px')};
  }
`;

export default GlobalGap;
