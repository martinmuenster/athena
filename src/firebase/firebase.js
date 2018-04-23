import * as firebase from 'firebase';
import * as firebaseUI from 'firebaseui';

const config = {
    apiKey: "AIzaSyBprN0CDTi1_bEShBfwf1tsA-QC-UoFCHc",
    authDomain: "athena-73dca.firebaseapp.com",
    databaseURL: "https://athena-73dca.firebaseio.com",
    projectId: "athena-73dca",
    storageBucket: "athena-73dca.appspot.com",
    messagingSenderId: "34122182943"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth;
var db = firebase.database();
const authUI = new firebaseUI.auth.AuthUI(firebase.auth());


export {
  auth,
  authUI,
  db
};