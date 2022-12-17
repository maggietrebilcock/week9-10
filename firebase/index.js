// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRoZCpKYMfDRV3naK66eAEZUBcOYYNcds",
  authDomain: "week07-app-f618d.firebaseapp.com",
  projectId: "week07-app-f618d",
  storageBucket: "week07-app-f618d.appspot.com",
  messagingSenderId: "595217193760",
  appId: "1:595217193760:web:5cc937ee14aaeec1fc9545",
  measurementId: "G-22EPDJF77E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };


