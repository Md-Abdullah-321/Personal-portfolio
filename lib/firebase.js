// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAmDD-ri4uyJdtSVR5rBrrpZjA97b1IN7c",
  authDomain: "personal-portfolio-1b57c.firebaseapp.com",
  projectId: "personal-portfolio-1b57c",
  storageBucket: "personal-portfolio-1b57c.appspot.com",
  messagingSenderId: "536638480166",
  appId: "1:536638480166:web:758264f40ebcf9ed4e2be7",
  measurementId: "G-R7PE6TK4FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);