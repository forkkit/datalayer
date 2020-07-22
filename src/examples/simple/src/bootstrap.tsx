import React from "react";
import { render } from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { W1Css }  from "dlaWidgets/W1";
import { Hello1 }  from "dlaWidgets/Examples";
import App from "./App";
import About from "./About";

var history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <W1Css />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/" component={Hello1} />
      <Route exact path="/test" component={About} />
    </Switch>
  </Router>
)

render(
  <Routes />
  ,
  document.getElementById("root")
);
