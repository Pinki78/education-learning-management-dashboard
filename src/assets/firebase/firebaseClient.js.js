// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEmzsC3T7Oabe1M62yX9SmjyJ1SQycjRQ",
  authDomain: "education-learning-dashboard.firebaseapp.com",
  projectId: "education-learning-dashboard",
  storageBucket: "education-learning-dashboard.firebasestorage.app",
  messagingSenderId: "297975397848",
  appId: "1:297975397848:web:8a07c5a893abebebfc46ad",
  measurementId: "G-DTMXS1Q1C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
