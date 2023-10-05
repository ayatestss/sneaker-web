import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase";

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

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });

    setSession({ status: "authenticated", userId: user.uid });
  });
};

export const logOut = async () => await FirebaseAuth.signOut();

export const sendPasswordResetEmailToUser = async (email) => {
  try {
    await sendPasswordResetEmail(FirebaseAuth, email);
  } catch (e) {
    alert(e.message);
  }
};

export const confirmPasswordResetWithCode = async (resetCode, newPassword) => {
  try {
    await confirmPasswordReset(FirebaseAuth, resetCode, newPassword);
  } catch (e) {
    alert(e.message);
  }
};
