  
import firebase from 'firebase'

export var firebaseConfig = {
    apiKey: "AIzaSyAhquCFNfVwSfHxTBbya87QmpnaELGnZ8w",
    authDomain: "myfirstfirebase-2920a.firebaseapp.com",
    databaseURL: "https://myfirstfirebase-2920a.firebaseio.com",
    projectId: "myfirstfirebase-2920a",
    storageBucket: "",
    messagingSenderId: "360267055067",
    appId: "1:360267055067:web:55bbf9fbda20ef9bac31fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.database().ref('articles');