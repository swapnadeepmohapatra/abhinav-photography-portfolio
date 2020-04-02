import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./App";
import PhotoDetail from "./PhotoDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/photoDetails" exact component={PhotoDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
