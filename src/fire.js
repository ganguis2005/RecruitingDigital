import firebase from 'firebase';
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyBDg0tKG1qp41vw06sXqMkOyAuoQDAztM8",
  authDomain: "recruitingdigitaldb.firebaseapp.com",
  databaseURL: "https://recruitingdigitaldb.firebaseio.com",
  projectId: "recruitingdigitaldb",
  storageBucket: "recruitingdigitaldb.appspot.com",
  messagingSenderId: "747623351327",
  appId: "1:747623351327:web:ab2132532c55b0a039012a",
  measurementId: "G-ZQFLNSNK7P"
};

firebase.initializeApp(config);

var fire = firebase.firestore();

export default fire;


