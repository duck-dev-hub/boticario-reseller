import { css } from 'styled-components';
import { rem } from 'polished';

const GlobalSize = css`
  :root {
    --font-smallest: ${rem('10px')};
    --font-small: ${rem('12px')};
    --font-normal: ${rem('16px')};
    --font-medium: ${rem('24px')};
    --font-great: ${rem('28px')};
    --font-big: ${rem('40px')};
  }
`;

export default GlobalSize;
