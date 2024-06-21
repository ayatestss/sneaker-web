import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase"; // Adjust the path as needed

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
<<<<<<< HEAD
    const user = result.user;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
=======
>>>>>>> f2791af ("first commit of new signupmember branch")
    const user = result.user;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signInWithEmailAndPass = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const user = result.user;
    return user;
  } catch (e) {
    throw e;
  }
};

export const signUpWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    return userCredential.user.uid; // Use user.uid instead of user.id
  } catch (error) {
    throw error;
  }
};

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });
    setSession({ status: "authenticated", userId: user.uid });
  });
};

export const logOut = async () => await FirebaseAuth.signOut();
