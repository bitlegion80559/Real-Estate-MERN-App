// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3f190.firebaseapp.com",
  projectId: "mern-estate-3f190",
  storageBucket: "mern-estate-3f190.appspot.com",
  messagingSenderId: "534558297315",
  appId: "1:534558297315:web:7484fece1cbd08a49f89d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);