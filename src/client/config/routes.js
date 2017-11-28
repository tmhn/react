import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from '../components/Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
