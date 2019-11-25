/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import GlobalSettings from './styles/settings';
import GlobalStyles from './styles/generic';
import GlobalBase from './styles/base/root';

ReactDOM.render(
  <>
    <GlobalSettings />
    <GlobalStyles />
    <GlobalBase />
    <App />
  </>,
  document.querySelector('[data-js="app"]'),
);
