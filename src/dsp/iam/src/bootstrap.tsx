import React, { Suspense } from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import { store } from "./injectableStore";
import AuthContextProvider from "./auth/AuthContext";
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Contact from './components/Contact';
import Home from "./components/Home";
import About from "./components/About";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import JoinForm from "./components/JoinForm";
import JoinWelcome from "./components/JoinWelcome";
import JoinError from "./components/JoinError";
import NewPasswordForm from "./components/NewPasswordForm";
import NewPasswordWelcome from "./components/NewPasswordWelcome";
import NewPasswordError from "./components/NewPasswordError";
import { W1Css }  from "dlaWidgets/W1";
/*
import { AppExample }  from "dlaWidgets/Examples";
const SuspenseIamReduxSuspense = () => <Suspense fallback="Loading...">
  <IamReduxExampleLazy store={store} />
</Suspense>
import IamProfileExample from "./examples/w1/IamProfileExample";
const IamProfileExampleLazy = React.lazy(() => import('./examples/w1/IamProfileExample'));
const IamProfileExampleSuspense = () => <Suspense fallback="Loading...">
  <IamProfileExampleLazy/>
</Suspense>
const IamReduxExampleLazy = React.lazy(() => import('./examples/redux/IamReduxExample'));
import { DlaHeader }  from "dlaWidgets/Widgets";
import { DlaProfile }  from "dlaWidgets/Widgets";
import IamFeaturesExample from "./examples/w1/IamFeaturesExample";
const ProfileExample = () => <><DlaHeader/><DlaProfile/><IamFeaturesExample/></>
*/
const Routes = () => (
  <div>
    <Route path="/api/iam" render={(props) => <Header {...props} title='IAM' /> } />
    <Switch>
      <Route exact path="/api/iam" component={Home} />
      <Route exact path="/api/iam/about" component={About} />
      <Route exact path="/api/iam/contact" component={Contact} />
      <Route exact path="/api/iam/login" component={LoginForm} />
      <Route exact path="/api/iam/profile" component={Profile} />
      <Route exact path="/api/iam/logout" component={Logout} />
      <Route exact path="/api/iam/join" component={JoinForm} />
      <Route exact path="/api/iam/join/welcome" component={JoinWelcome} />
      <Route exact path="/api/iam/join/error" component={JoinError} />
      <Route exact path="/api/iam/newpassword" component={NewPasswordForm} />
      <Route exact path="/api/iam/newpassword/welcome" component={NewPasswordWelcome} />
      <Route exact path="/api/iam/newpassword/error" component={NewPasswordError} />
    </Switch>
  </div>
)

var history = createBrowserHistory();

const Iam = () => (
  <AuthContextProvider history={history}>
    <SnackbarProvider>
      <Provider store={store}>
        <Router history={history}>
          <W1Css />
          <Routes />
        </Router>
      </Provider>
    </SnackbarProvider>
  </AuthContextProvider>
);

render(
  <Iam />
  ,
  document.getElementById("root")
);
