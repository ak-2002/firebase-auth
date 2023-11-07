// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCwoaZ_3jnk2titD9nU0GO7cpdc82cAqok",
  authDomain: "acaciamis-57a9b.firebaseapp.com",
  projectId: "acaciamis-57a9b",
  storageBucket: "acaciamis-57a9b.appspot.com",
  messagingSenderId: "779440902668",
  appId: "1:779440902668:web:45df570d0160ef0985d429",
  measurementId: "G-NVP8MMH99H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;