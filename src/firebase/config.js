import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCVDVzhru9IpEyA_k4LW8bpbqptZ1hGM_M",
  authDomain: "one-coffee-1.firebaseapp.com",
  databaseURL: "https://one-coffee-1.firebaseio.com",
  projectId: "one-coffee-1",
  storageBucket: "one-coffee-1.appspot.com",
  messagingSenderId: "652754778337",
  appId: "1:652754778337:web:065606355501655b33dfa0",
  measurementId: "G-6HPW1XMNGW",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;
