// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_X7S9G_QSdnGagXAS9gG8E54Z0cIGPI",
  authDomain: "qk-car-service.firebaseapp.com",
  projectId: "qk-car-service",
  storageBucket: "qk-car-service.appspot.com",
  messagingSenderId: "1027014490228",
  appId: "1:1027014490228:web:b2863fdc3cd02c2eeab921"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth