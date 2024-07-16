import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateHasChanged,
  signInWithGoogle,
  logOut,
  signInWithEmailAndPass,
  signUpWithGoogle,
  signUpWithEmailPassword,
} from '../auth/services';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CURRENT_MEMBER } from './graphql/getMemberById';
import { redirectToSignupIfNecessary } from './authUtils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [session, setSession] = useState({
    userId: null,
    status: 'checking',
    authToken: localStorage.getItem('authToken') || '',
  });
  const [redirectedToSignup, setRedirectedToSignup] = useState(false);

  const { data, loading } = useQuery(CURRENT_MEMBER);

  useEffect(() => {
    onAuthStateHasChanged(setSession);
  }, []);

  const checking = () => {
    setSession((prev) => ({ ...prev, status: 'checking' }));
  };

  const validateAuth = async (user) => {
    if (user) {
      const token = await user.getIdTokenResult();
      setSession({
        userId: user.uid,
        status: 'authenticated',
        authToken: token.token,
      });
    } else {
      handleLogOut();
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      checking();
      const user = await signInWithGoogle();
      // Store the auth token in localStorage
      if (user && user.getIdToken) {
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
      }

      validateAuth(user);
    } catch (error) {
      console.log('hello');
      console.error('Error occurred during Google login:', error);
      throw error;
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      checking();
      const user = await signUpWithGoogle();

      if (user && user.getIdToken) {
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
      }

      validateAuth(user);
    } catch (error) {
      console.error('Error with google login');
    }
  };

  const handleLoginWithEmailAndPass = async (email, password) => {
    try {
      checking();
      const user = await signInWithEmailAndPass(email, password);
      const token = await user.getIdTokenResult();

      // Store the auth token in localStorage
      if (user && token) {
        localStorage.setItem('authToken', token.token);
      }

      validateAuth(user);
    } catch (error) {
      throw error;
    }
  };

  const handleSignupWithEmailAndPass = async (email, password) => {
    try {
      checking();
      const user = await signUpWithEmailPassword(email, password);
      console.log(user);
      const token = await user.getIdToken();
      console.log('email Token', token);

      // Store the auth token in localStorage
      if (user && token) {
        console.log('setting token');
        localStorage.setItem('authToken', token);
        console.log('tokenSet');
      }

      validateAuth(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const handleLogOut = async () => {
    await logOut();
    localStorage.removeItem('authToken');
    setSession({ userId: null, status: 'no-authenticated' });
    return navigate('/login');
  };

  const currentUser = () => {
    if (!loading) {
      if (!data) {
        redirectToSignupIfNecessary(
          redirectedToSignup,
          setRedirectedToSignup,
          navigate
        );
        return session;
      }

      if (!data.memberById) {
        redirectToSignupIfNecessary(
          redirectedToSignup,
          setRedirectedToSignup,
          navigate
        );
        return session;
      }
      setLoading(false);
      return { ...session, ...data.memberById };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...session,
        currentUser,
        handleLoginWithGoogle,
        handleSignupWithGoogle,
        handleSignupWithEmailAndPass,
        handleLoginWithEmailAndPass,
        handleLogOut,
      }}
    >
      {loading ? <>Loading</> : children}
    </AuthContext.Provider>
  );
};
