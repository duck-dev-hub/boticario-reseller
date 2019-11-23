import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Login from '../pages/Login';
import UserRegistration from '../pages/UserRegistration';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={UserRegistration} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
