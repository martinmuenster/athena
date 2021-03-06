import React from 'react';
import { auth, db } from '../firebase';

class SignInPage extends React.Component {
    componentDidMount() {
    
    var self = this;
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
          if (self.props.callBack) {
            self.props.callBack(user);
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
                
            </div>
        )
    }
  
}
  

export default SignInPage;