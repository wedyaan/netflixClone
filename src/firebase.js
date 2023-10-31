// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// REACT_APP_FIREBASE_API_KEY=AIzaSyA8MgyPlyWOpUp4arsJblvgR1mGGid71XQ
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflixclone-2b86a.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflixclone-2b86a
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflixclone-2b86a.appspot.com
// REACT_APP_MESSAGING_SENDER=853112493939
// REACT_APP_APP_ID=1:853112493939:web:ca4567f06e07e2eb605706

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
