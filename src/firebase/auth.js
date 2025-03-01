import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseConfig"; 

const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("SignUp Error:", error.message); 
    return error.message;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error.message); 
    return error.message;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return "User logged out successfully!";
  } catch (error) {
    console.error("Logout Error:", error.message); 
    return error.message;
  }
};

export const checkAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};
