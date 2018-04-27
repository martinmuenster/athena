import React from 'react';
import { auth, db } from '../firebase';

class SignOutPage extends React.Component {
    componentDidMount() {
    var self = this;
    //auth.auth.signOut();
    auth.signOut();
    if (self.props.callBack) {
        self.props.callBack();
    }
    }
    render() {
        return (
            <div>
                <h2>Sign Out</h2>
            </div>
        )
    }
  

}

export default SignOutPage;
