import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCi0maIyu9LgE1tM0IITNyu6MLtPFPXw4",
  authDomain: "movie-db-11e10.firebaseapp.com",
  projectId: "movie-db-11e10",
  storageBucket: "movie-db-11e10.appspot.com",
  messagingSenderId: "870443541516",
  appId: "1:870443541516:web:6bc120df324f582f1fba29",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
