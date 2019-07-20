import app from'firebase/app';
import 'firebase/auth';

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
    app.initializeApp(config);
    
    this.auth = app.auth();
  }

  // AUTH API -

  
  // API to create user
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //f no user is authenticated, nothing will happen when this function is called
  doSignOut = () => this.auth.signOut();


  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;

