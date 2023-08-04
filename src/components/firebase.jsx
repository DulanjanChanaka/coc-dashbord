// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyDdyTqvViyqtLETSrNMzqFP-xM0NIa9lQ8",
    authDomain: "clashlayouts-9d19d.firebaseapp.com",
    projectId: "clashlayouts-9d19d",
    storageBucket: "clashlayouts-9d19d.appspot.com",
    messagingSenderId: "1073716509146",
    appId: "1:1073716509146:web:56713b2e4bf310187b28e3"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
 