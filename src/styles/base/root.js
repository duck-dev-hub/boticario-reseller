import { createGlobalStyle } from 'styled-components';

const Root = createGlobalStyle`
    html {
        font-size: 100%;
        box-sizing: border-box;
        height: 100%;
    }
    body {
        box-sizing: border-box;
        min-height: 100%;
        text-rendering: optimizeLegibility;
        background-color: var(--color-gray-lighter-2);
        font-family: 'Roboto', sans-serif;
    }
    div[data-js="app"]{
        overflow-x: hidden;
        overflow-y: scroll;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
        border: 0;
    }

    a {
        text-decoration: inherit;
        color: inherit;
        &:hover {
            cursor: pointer;
        }
    }

    ul,
    ol {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
        display: inline-block;
        vertical-align: middle;
    }
    strong {
        font-weight: bold;
    }

    em {
        font-style: italic;
    }
`;
export default Root;
