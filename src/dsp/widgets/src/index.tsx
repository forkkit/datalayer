import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Link, Switch } from "react-router-dom";
import W1Css from "./assets/W1Css";
import DlaHeader from "./header/DlaHeader";
import DlaPricing from "./pricing/DlaPricing";
import DlaPreFooter from "./prefooter/DlaPreFooter";
import DlaFooter from "./footer/DlaFooter";
// import * as serviceWorker from './serviceWorker';

// import "./assets/scss/material-kit-pro-react.scss?v=1.8.0";
// import "./assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

import AppExample from "./examples/AppExample";

var history = createBrowserHistory();

var Routes = () => <Router history={history}>
  <Route path="/" component={DlaHeader} />
  <Route path="/api/widgets" component={AppExample} />
  <Route path="/api/widgets" component={DlaPreFooter} />
  <Route path="/api/widgets" component={DlaFooter} />
  <Route path="/api/widgets/about" component={DlaPricing} />
</Router>

ReactDOM.render(
  <>
    <W1Css />
    <Routes />
  </>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
