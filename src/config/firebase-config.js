// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7tu8pQCDG1UgfeHTEMSa27U_Bk1smb8Y",
  authDomain: "fintrack-9957e.firebaseapp.com",
  projectId: "fintrack-9957e",
  storageBucket: "fintrack-9957e.firebasestorage.app",
  messagingSenderId: "577398564915",
  appId: "1:577398564915:web:41699b6723d3744e1f1b46",
  measurementId: "G-CESPSKB86L"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
//const analytics = getAnalytics(app);