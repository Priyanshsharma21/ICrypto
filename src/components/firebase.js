// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRE42lYxeg7vrZVf12oFr-3_8wgvkyTW8",
    authDomain: "zredux-netflix.firebaseapp.com",
    projectId: "zredux-netflix",
    storageBucket: "zredux-netflix.appspot.com",
    messagingSenderId: "544506997469",
    appId: "1:544506997469:web:79ce2983ba493460b7c934",
    measurementId: "G-05XSENSS7H"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  //firestore is the db ue are using for auth
const auth = firebase.auth();

export { auth }
export default db;