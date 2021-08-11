import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyCTyuzsVqjsMeLnvNSuhiAG0Qt6--aOb9U',
  authDomain: 'dev-skael-website.firebaseapp.com',
  databaseURL: 'https://dev-skael-website.firebaseio.com',
  projectId: 'dev-skael-website',
  storageBucket: 'dev-skael-website.appspot.com',
  messagingSenderId: '913876044744',
  appId: '1:913876044744:web:32e263fe333b5ce0634efd',
  measurementId: 'G-CZV3TVHV0P'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const authGoogleProvider = new firebase.auth.GoogleAuthProvider();
export const authFacebookProvider = new firebase.auth.FacebookAuthProvider();
export const authMicrosoftProvider = new firebase.auth.OAuthProvider(
  'microsoft.com'
);

export default firebase;
