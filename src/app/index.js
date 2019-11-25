import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Home from '../pages/Home';
import Login from '../pages/Login';
import UserRegistration from '../pages/UserRegistration';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={UserRegistration} />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
