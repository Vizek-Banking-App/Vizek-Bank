import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCo6I0yPt5O78tq1NbzyqjlVqcR4BFRpzk",
  authDomain: "login-users-project-a9844.firebaseapp.com",
  projectId: "login-users-project-a9844",
  storageBucket: "login-users-project-a9844.appspot.com",
  messagingSenderId: "951442940406",
  appId: "1:951442940406:web:a96d1b46052a6e4d7f67d7",
  measurementId: "G-LQMQJ1W7BP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvide = new GoogleAuthProvider()
export const db = getFirestore(app)
