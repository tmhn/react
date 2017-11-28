import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import NoMatch from "../components/Core/NoMatch";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </main>
);

export default Main;
