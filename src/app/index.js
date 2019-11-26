import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import ScrollToTop from '../helpers/scrollToTop';

import Home from '../pages/Home';
import Login from '../pages/Login';
import UserRegistration from '../pages/UserRegistration';
import Shoppings from '../pages/Shoppings';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={UserRegistration} />
          <Route path="/compras" component={Shoppings} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
