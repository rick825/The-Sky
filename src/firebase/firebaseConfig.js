// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrbgs9oFaOkk2qpBePRmSw2SqLluc2lCs",
  authDomain: "thesky-c22c5.firebaseapp.com",
  projectId: "thesky-c22c5",
  storageBucket: "thesky-c22c5.firebasestorage.app",
  messagingSenderId: "1051449997974",
  appId: "1:1051449997974:web:c32ba3b444309dba75e0b7",
  measurementId: "G-8KSNT07X86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);