// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo4wS7Uk16Qgr26NZhouI_u2pTqkxrlIY",
  authDomain: "team-voting-app-8c7f5.firebaseapp.com",
  databaseURL: "https://team-voting-app-8c7f5-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-8c7f5",
  storageBucket: "team-voting-app-8c7f5.appspot.com",
  messagingSenderId: "494017797447",
  appId: "1:494017797447:web:892199a46368845be58062",
  measurementId: "G-00QCMMH2LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);