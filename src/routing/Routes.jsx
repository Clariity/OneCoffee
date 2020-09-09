import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../components/Login";
import Home from "../components/Home";
import NotFound from "./NotFound";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};
