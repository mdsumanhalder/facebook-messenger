import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCTxg9IvtJ7k8MkOn7b84GIE78EXD9w6f0",
  authDomain: "facebook-messenger-4a2a6.firebaseapp.com",
  projectId: "facebook-messenger-4a2a6",
  storageBucket: "facebook-messenger-4a2a6.appspot.com",
  messagingSenderId: "1027742286813",
  appId: "1:1027742286813:web:c4684ba909085bcb9b2c34"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };
