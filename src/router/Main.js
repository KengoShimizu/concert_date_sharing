import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Search from './Search';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/search" component={Search} />
    </Switch>
  </main>
);

export default Main;
