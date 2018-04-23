import {
    auth,
    authUI
} from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

export {
    auth,
    authUI
};

/*export const signInPopup = () => {
        authUI.start('#firebaseui-auth-container', {
            // open the authentication flow as a popup
            signInFlow: 'popup',
            // require password each time
            credentialHelper: firebaseUI.auth.CredentialHelper.NONE,
            // new users automatically created for new emails
            signInOptions: [{
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: true
                }],
            // respond to authenticaion attempts
            callbacks: {
                signInSuccessWithAuthResult: authResult => {
                    // save interesting parts of user data
                    this.signIn(authResult.user)
                    // hide styling again
                    this.isShown = false
                    // do not redirect
                    return false
                },
                uiShown: () => {
                    // style UI container as a popup
                    this.isShown = true
                }
            }
        })
    }*/