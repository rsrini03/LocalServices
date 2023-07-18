// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhGDjh6yPuaaj249yulJOpq9txDqUfT8s",
  authDomain: "localservices-2ab4f.firebaseapp.com",
  projectId: "localservices-2ab4f",
  storageBucket: "localservices-2ab4f.appspot.com",
  messagingSenderId: "997121651130",
  appId: "1:997121651130:web:17fa73f55a8bb976612d83",
  measurementId: "G-T8C2J3YM5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);