import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import UserRegistration from '../pages/UserRegistration';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/w" component={Login} />
        <Route exact path="/" component={UserRegistration} />
      </BrowserRouter>
    </>
  );
};

export default App;
