import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseAuth } from './firebase';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { uid } = result.user;
    return uid;
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
    // console.log({ result });
    const { uid } = result.user;
    return uid;
  } catch (e) {
    throw e;
  }
};

export const onAuthStateHasChanged = (setSession) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: 'no-authenticated', userId: null });

    console.log(user);
    setSession({ status: 'authenticated', userId: user.uid });
  });
};

export const logOut = async () => await FirebaseAuth.signOut();
