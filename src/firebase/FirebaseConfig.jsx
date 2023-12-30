// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMXOtfifEA4jiKBIl_TapdykcLHtfDMWY",
  authDomain: "smart-cart-b6236.firebaseapp.com",
  projectId: "smart-cart-b6236",
  storageBucket: "smart-cart-b6236.appspot.com",
  messagingSenderId: "927376740165",
  appId: "1:927376740165:web:38a0612bed1be94cd8f82c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const fireDb = app.firestore();
const auth = firebase.auth();

export { auth, fireDb };
