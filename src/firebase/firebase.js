import firebase from 'firebase'
import "firebase/auth";
import * as SECRETS from '../secrets'

var firebaseConfig = {
    apiKey: SECRETS.GOOGLE_API,
    authDomain: "generic-movie-app.firebaseapp.com",
    projectId: "generic-movie-app",
    storageBucket: "generic-movie-app.appspot.com",
    messagingSenderId: "730478017782",
    appId: "1:730478017782:web:940d973bed2afdcc6580d7",
    measurementId: "G-4RYYV955TK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth()

export default firebase
