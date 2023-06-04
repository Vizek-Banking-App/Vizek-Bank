
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGWlDd9e6qP_r-PFcZroOY2cuAUQ5BQzk",
  authDomain: "wallet-test-76537.firebaseapp.com",
  projectId: "wallet-test-76537",
  storageBucket: "wallet-test-76537.appspot.com",
  messagingSenderId: "139529861547",
  appId: "1:139529861547:web:00db0134500d9e92a97aee"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);