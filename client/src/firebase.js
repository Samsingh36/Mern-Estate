// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e9277.firebaseapp.com",
  projectId: "mern-estate-e9277",
  storageBucket: "mern-estate-e9277.appspot.com",
  messagingSenderId: "740161723676",
  appId: "1:740161723676:web:2764696d2a40bff8422ed9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);