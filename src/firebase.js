import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAVMYlVpRfll55SdiUEr2wVl8LvI5MK_E4",
  authDomain: "facebook-messenger-495d4.firebaseapp.com",
  projectId: "facebook-messenger-495d4",
  storageBucket: "facebook-messenger-495d4.appspot.com",
  messagingSenderId: "831427495103",
  appId: "1:831427495103:web:79e83adef25e6fe184b20a",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth };
