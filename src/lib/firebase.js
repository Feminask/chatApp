// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-3142c.firebaseapp.com",
  projectId: "reactchat-3142c",
  storageBucket: "reactchat-3142c.appspot.com",
  messagingSenderId: "672526509640",
  appId: "1:672526509640:web:7b44a76ae62859fefc5a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()