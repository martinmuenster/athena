import React from 'react';
import { auth, db } from '../firebase';

class SignInPage extends React.Component {
    componentDidMount() {
    var self = this;
    console.log(auth.auth);
    var uiConfig = {
      
      'signInOptions': [
        //auth.auth.GoogleAuthProvider.PROVIDER_ID,
        auth.auth.EmailAuthProvider.PROVIDER_ID
      ],
      'signInFlow': 'popup',
      //'credentialHelper': auth.authUI.CredentialHelper.NONE,
        
        'callbacks': {
        'signInSuccess': function(user) {
          db.createUser(user.uid, user.displayName, user.email);  
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          
          return false;
        }
      }
    };
    auth.authUI.start('#firebaseui-auth', uiConfig);
    }
        
    render() {
        return (
            <div>
            
    <h1>Sign In</h1>
            <div id="firebaseui-auth">
            </div>
  </div>
        )
    }
  
}
  

export default SignInPage;