import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FirebaseAuth } from "./firebase";
import { logEvent } from "firebase/analytics";

const googleProvider = new GoogleAuthProvider();

export const getAdditionlInfo = (result) => {
  const additionalUserInfo = getAdditionalUserInfo(result);
  return additionalUserInfo;
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    return result;
  } catch (e) {
    return e;
  }
};

export const signUpWithGoogle = async () => {
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
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const user = result.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(FirebaseAuth, email);
    logEvent(analytics, "password_reset_requested", { email });
    return { success: true };
  } catch (error) {
    logEvent(analytics, "password_reset_error", { error: error.code });
    let errorMessage;
    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "No user found with this email address.";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        break;
      default:
        errorMessage = "An error occurred. Please try again later.";
        console.error(error);
    }
    return { success: false, error: errorMessage };
  }
};

export const verifyPasswordResetCode = async (code) => {
  try {
    await FirebaseAuth.verifyPasswordResetCode(code);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const resendPasswordResetEmail = async (email) => {
  try {
    await sendPasswordResetEmail(FirebaseAuth, email);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });

    setSession({ status: "authenticated", userId: user.uid });
  });
};

export const logOut = async () => await FirebaseAuth.signOut();
