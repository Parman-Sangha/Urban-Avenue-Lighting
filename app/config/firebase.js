// /app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTnb08SK6wx5gLglRJzqY0nNWj3KYk0_E",
  authDomain: "urban-ave-lighting.firebaseapp.com",
  projectId: "urban-ave-lighting",
  storageBucket: "urban-ave-lighting.firebasestorage.app",
  messagingSenderId: "838210313891",
  appId: "1:838210313891:web:10525f50c06630841ba916",
  measurementId: "G-Y4CEJ7ZMZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const analytics = getAnalytics(app);

export { app, auth, analytics }; // Export for use in other parts of your application
