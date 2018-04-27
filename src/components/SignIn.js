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
            //console.log(db.getUser(user.uid));
          if (self.props.callBack) {
            self.props.callBack(user);
            //db.addGame("12345", "tomorrow", "11:00", "2", "soccer", "here");
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