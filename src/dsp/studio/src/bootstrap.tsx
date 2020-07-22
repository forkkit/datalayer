import React, { Suspense } from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Route, Switch } from "react-router-dom";
import { store } from './injectableStore';
import { W1Css }  from "dlaWidgets/W1";
/*
import { AppExample }  from "dlaWidgets/Examples";
import { IamProfileExample }  from "dlaIam/Iam";
import DlaHeader from "./components/DlaHeader";
const IamReduxExample = React.lazy(() => import("dlaIam/Iam").then(module => ({ default: (module as any).IamReduxExample })));
const IamProfileExampleLazy = React.lazy(() => import("dlaIam/Iam").then(module => ({ default: (module as any).IamProfileExample })));
const IamProfileExampleSuspense = () => <Suspense fallback="Loading...">
  <IamProfileExampleLazy />
</Suspense>
import StudioFeaturesExample from './examples/StudioFeaturesExample';
import StudioProfileExample from './examples/StudioProfileExample';
*/
import { DlaHeader, DlaProfile }  from "dlaWidgets/Widgets";
import { IamFeaturesExample } from "dlaIam/Iam";
const ProfileExample = () => <><DlaProfile/><IamFeaturesExample/></>

const Routes = () => (
  <div>
    <DlaHeader/>
    <Switch>
      <Route exact path="/" component={ProfileExample} />
      <Route exact path="/api/studio" component={ProfileExample} />
    </Switch>
  </div>
)

var history = createBrowserHistory(); 

const Studio = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <W1Css/>
        <Routes/>
      </Router>
    </Provider>
  );
};

render(
  <Studio />
  ,
  document.getElementById('root')
);
