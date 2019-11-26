import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import ScrollToTop from '../helpers/scrollToTop';

import Home from '../pages/Home';
import Login from '../pages/Login';
import UserRegistration from '../pages/UserRegistration';
import Shoppings from '../pages/Shoppings';
import RegisteredPurchases from '../pages/RegisteredPurchases';

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
          <Route
            path="/minhas-compras"
            component={RegisteredPurchases}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
