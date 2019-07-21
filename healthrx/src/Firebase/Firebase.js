import app from'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';



// const firebase = require('firebase');
// require('firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyC3ZH1hjXHPZOtmSh71qR9U4BvjqDLEwBQ",
  authDomain: "healthrx-c62d2.firebaseapp.com",
  databaseURL: "https://healthrx-c62d2.firebaseio.com",
  projectId: "healthrx-c62d2",
  storageBucket: "healthrx-c62d2.appspot.com",
  messagingSenderId: "883168315312",
  appId: "1:883168315312:web:bb63bb763760ed6a"
};

//
class Firebase {
  constructor() {
    
    app.initializeApp(firebaseConfig);   
    
    this.fieldValue = app.firestore.FieldValue;
    this.auth = app.auth();
    this.db = app.database();

    this.db = app.firestore();

    


    }
    
 
    // *** AUTH  API ***


  // API to create user
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //f no user is authenticated, nothing will happen when this function is called
  doSignOut = () => this.auth.signOut();


    // *** User API ***

    onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              username: authUser.email,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });





    patient = uid => this.db.doc(`patients/${uid}`);
    patients = () => this.db.collection('patients');

    user = uid => this.db.doc(`users/${uid}`);
    users = () => this.db.collection('users');
    
    
}

export default Firebase;

