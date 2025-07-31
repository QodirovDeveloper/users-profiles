import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA7DouJQgc_A5nSPovOHOVHA8lIcfvKEY",
  authDomain: "hasanboy-project.firebaseapp.com",
  projectId: "hasanboy-project",
  storageBucket: "hasanboy-project.firebasestorage.app",
  messagingSenderId: "157519377027",
  appId: "1:157519377027:web:6d11f310e5c621c45a61b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
export const db = getFirestore(app);
