// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuh6PHPmQH898_hzRiXvrZ6vBKTK4h_wc",
  authDomain: "zsp-trainer-management.firebaseapp.com",
  projectId: "zsp-trainer-management",
  storageBucket: "zsp-trainer-management.appspot.com",
  messagingSenderId: "972842442316",
  appId: "1:972842442316:web:4049ca6de52d581ec69ee9",
  measurementId: "G-6S9BQRSZTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app