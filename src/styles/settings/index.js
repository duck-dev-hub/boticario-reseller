import { createGlobalStyle } from 'styled-components';
import GlobalColors from './colors';
import GlobalSize from './size';
import GlobalGap from './gap';

const GlobalSettings = createGlobalStyle`
    ${GlobalColors}
    ${GlobalSize}
    ${GlobalGap}
`;

export default GlobalSettings;
