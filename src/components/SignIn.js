import React from 'react';
import { auth, db } from '../firebase';

//const SignInPage = () =>
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
          //console.log(db.db);
          //db.setdoCreateUser(user.uid, user.username, user.email);
          db.db.ref('users/${user.uid}').push({
              user.username
          });
            
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
            <div id="firebaseui-auth">
            </div>
    <h1>Sign In</h1>
  </div>
        )
    }
  
}
  

export default SignInPage;