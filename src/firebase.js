// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwcbW_xyWm7PlHTT_ekaBJgQ3cs0iaojA",
  authDomain: "hara-artesanal.firebaseapp.com",
  projectId: "hara-artesanal",
  storageBucket: "hara-artesanal.firebasestorage.app",
  messagingSenderId: "310642916731",
  appId: "1:310642916731:web:34bc32b8072870c27c91de",
  measurementId: "G-KXC19T5QHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);