// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATBl53a-5sSufDvKIb4Pse1A06Ynr4LYY",
  authDomain: "avrilacc-832d9.firebaseapp.com",
  projectId: "avrilacc-832d9",
  storageBucket: "avrilacc-832d9.appspot.com",
  messagingSenderId: "573594727671",
  appId: "1:573594727671:web:f0d2847b9d94ff61464ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);