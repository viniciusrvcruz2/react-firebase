// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASQ-uqNl8H2sBy1xK3uuqNb5k1NlfHkWM",
  authDomain: "react-firebase-11034.firebaseapp.com",
  projectId: "react-firebase-11034",
  storageBucket: "react-firebase-11034.appspot.com",
  messagingSenderId: "969863163983",
  appId: "1:969863163983:web:5413f5e59d4d9bffb9ba3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);