// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcbX30DPd8-adn5kh4sXdLrjO9UM18CHg",
  authDomain: "task-management-system-def38.firebaseapp.com",
  projectId: "task-management-system-def38",
  storageBucket: "task-management-system-def38.appspot.com",
  messagingSenderId: "947242858962",
  appId: "1:947242858962:web:dcf2cf044d61297313b00b",
  measurementId: "G-ET8JE1Z7SF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
