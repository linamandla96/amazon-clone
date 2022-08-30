import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq770IdRQAnsEfP-nQNecboxZYV3yc538",
  authDomain: "clone-app-3ecbe.firebaseapp.com",
  projectId: "clone-app-3ecbe",
  storageBucket: "clone-app-3ecbe.appspot.com",
  messagingSenderId: "463879497993",
  appId: "1:463879497993:web:59f0ebf6ce914714744bd8",
  measurementId: "G-RFVVKBH2FZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
