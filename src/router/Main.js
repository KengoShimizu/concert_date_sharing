import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register';
import Search from './Search';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Search} />
      <Route path="/register" component={Register} />
    </Switch>
  </main>
);

export default Main;
