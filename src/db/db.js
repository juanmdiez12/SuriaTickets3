import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsrLp6RRXsFrMXPB7AJwDNnfj9fcnp9fg",
  authDomain: "suriatickets.firebaseapp.com",
  projectId: "suriatickets",
  storageBucket: "suriatickets.appspot.com",
  messagingSenderId: "278755005079",
  appId: "1:278755005079:web:2d58ef56a30c1f59cb0fd2"
};


initializeApp(firebaseConfig);

export const db = getFirestore();