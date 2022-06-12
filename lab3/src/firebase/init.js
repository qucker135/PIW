// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgRIZhwzUKvPPKnY4XphWUEOrSJ4JNjM",
  authDomain: "chidren-day.firebaseapp.com",
  projectId: "chidren-day",
  storageBucket: "chidren-day.appspot.com",
  messagingSenderId: "664880011898",
  appId: "1:664880011898:web:e0df33938aec3d1dccf9c3",
  measurementId: "G-0TBZKKF0DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
