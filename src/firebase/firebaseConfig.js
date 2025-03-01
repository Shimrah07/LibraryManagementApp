// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDXCvCh2oIf5QF30uKBBSS1ulUkHOYPXc",
  authDomain: "library-management-app-cb6e5.firebaseapp.com",
  projectId: "library-management-app-cb6e5",
  storageBucket: "library-management-app-cb6e5.firebasestorage.app",
  messagingSenderId: "999905343567",
  appId: "1:999905343567:web:bbb79373f70c785d56523a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;