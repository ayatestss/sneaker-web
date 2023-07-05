import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase";
import {
  signInWithEmailAndPassword as signInWithEmail,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  createUserWithEmailAndPassword as firebaseCreateUser,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, email, photoURL, uid } = result.user;
    console.log({ displayName, email, photoURL, uid });
    return uid;
  } catch (e) {
    alert(e.message);
  }
};

// for login

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });

    setSession({ status: "authenticated", userId: user.uid });
  });
};

// password reset
export const sendPasswordResetEmail = async (email) => {
  try {
    await firebaseSendPasswordResetEmail(FirebaseAuth, email);
    return true;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return false;
  }
};

// register page
export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    console.log("Creating user with email:", email);
    const result = await firebaseCreateUser(FirebaseAuth, email, password);
    console.log("User created successfully:", result.user.uid);
    return result.user.uid;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const logOut = async () => await FirebaseAuth.signOut();

export const signInWithEmailAndPassword = signInWithEmail;
