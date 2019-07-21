import app from'firebase/app';
import 'firebase/auth';
<<<<<<< HEAD
import 'firebase/database';
import 'firebase/firestore';



// const firebase = require('firebase');
// require('firebase/firestore');
=======
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon


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
<<<<<<< HEAD
    
    app.initializeApp(firebaseConfig);   
=======
    app.initializeApp(config);
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon
    
    this.fieldValue = app.firestore.FieldValue;
    this.auth = app.auth();
<<<<<<< HEAD
    this.db = app.database();

    this.db = app.firestore();

    


    }
    
 
    // *** AUTH  API ***

=======
  }

  // AUTH API -
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon

  
  // API to create user
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //f no user is authenticated, nothing will happen when this function is called
  doSignOut = () => this.auth.signOut();

<<<<<<< HEAD

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
    
    
=======

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
>>>>>>> parent of dd385d08... Merge branch 'master' of https://github.com/itavares/WICKPYZ-Hackathon
}

export default Firebase;

