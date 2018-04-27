import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import SignOutPage from './SignOut';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';

import * as routes from '../constants/routes';
    
import './App.css';
    
import { db } from '../firebase';

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {user: {name: null, id: null}};
    db.activateListeners();
    console.log("wrbv");
  }
    
  signInCallBack(signInInfo) {
    this.state.user.name = signInInfo.displayName;
    this.state.user.id = signInInfo.uid;
      
}
  render() {
      return(
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage username={this.state.user.name} />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={() => <SignInPage callBack={this.signInCallBack.bind(this)} />}
      />
      <Route
        exact path={routes.SIGN_OUT}
        component={() => <SignOutPage />}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={() => <AccountPage />}
      />
    </div>
  </Router>
);
  }
}
export default App;