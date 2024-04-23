import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase";

const auth = FirebaseAuth;

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

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
<<<<<<< HEAD
    const userCredential = await createUserWithEmailAndPassword(
      FirebaseAuth,
=======
    const userCredential = await auth.createUserWithEmailAndPassword(
>>>>>>> 2937025 ("signup-member page")
      email,
      password
    );
    return userCredential.user.id;
  } catch (error) {
    throw error;
  }
};

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });
<<<<<<< HEAD
=======

>>>>>>> 2937025 ("signup-member page")
    setSession({ status: "authenticated", userId: user.uid });
  });
};

export const logOut = async () => await FirebaseAuth.signOut();
