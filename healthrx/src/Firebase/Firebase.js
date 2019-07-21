import app from'firebase/app';
import 'firebase/auth';
import 'firebase/database';



const firebase = require('firebase');
require('firebase/firestore');

const config = {
  apiKey: "AIzaSyC3ZH1hjXHPZOtmSh71qR9U4BvjqDLEwBQ",
  authDomain: "healthrx-c62d2.firebaseapp.com",
  databaseURL: "https://healthrx-c62d2.firebaseio.com",
  projectId: "healthrx-c62d2",
  storageBucket: "",
  messagingSenderId: "883168315312"
};

//
class Firebase {
  constructor() {
    
    var db = app.initializeApp(config);
    
    this.auth = app.auth();
    this.db = app.database();

    global.db = db.firestore();
    this.state ={
      database:  db.firestore()

    }
    
  }

  database1 = new Object();

 
    // *** AUTH  API ***


  // API to create user
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //f no user is authenticated, nothing will happen when this function is called
  doSignOut = () => this.auth.signOut();

  //Future implementation
  // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // doPasswordUpdate = password =>
  //   this.auth.currentUser.updatePassword(password);



    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
    
}

export default Firebase;

