import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore '

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyATW42O63DpbfUT2iAEk8ByzjYk-7oCs08",
    authDomain: "mp-firegram.firebaseapp.com",
    databaseURL: "https://mp-firegram.firebaseio.com",
    projectId: "mp-firegram",
    storageBucket: "mp-firegram.appspot.com",
    messagingSenderId: "264510119382",
    appId: "1:264510119382:web:981861c50c753b91dd1877"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorege = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorege, projectFirestore };
