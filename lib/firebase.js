import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAOriSpFgGtT1pRrNHVAG3iftgtby5nE-Q',
  authDomain: 'streak-486df.firebaseapp.com',
  databaseURL: 'https://streak-486df.firebaseio.com',
  projectId: 'streak-486df',
  storageBucket: 'streak-486df.appspot.com',
  messagingSenderId: '102377467825'
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database()
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider}
