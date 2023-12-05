import { createContext, useEffect, useState } from "react";
import {
  onAuthStateHasChanged,
  signInWithGoogle,
  logOut,
  signInWithEmailAndPass,
  resetPassword,
} from "../auth/services";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MEMBER_BY_ID } from "./graphql/getMemberById";
import { redirectToSignupIfNecessary } from "./authUtils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [session, setSession] = useState({
    userId: null,
    status: "checking",
    authToken: localStorage.getItem("authToken") || "",
  });
  const [redirectedToSignup, setRedirectedToSignup] = useState(false);

  useEffect(() => {
    onAuthStateHasChanged(setSession);
  }, []);

  const checking = () =>
    setSession((prev) => ({ ...prev, status: "checking" }));

  const validateAuth = async (user) => {
    if (user) {
      const token = await user.getIdTokenResult();
      setSession({
        userId: user.uid,
        status: "authenticated",
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
        localStorage.setItem("authToken", user.getIdToken());
      }

      validateAuth(user);
    } catch (error) {
      console.error("Error occurred during Google login:", error);
      throw error;
    }
  };

  const handleLoginWithEmailAndPass = async (email, password) => {
    try {
      checking();
      const user = await signInWithEmailAndPass(email, password);
      const token = await user.getIdTokenResult();

      // Store the auth token in localStorage
      if (user && token) {
        localStorage.setItem("authToken", token.token);
      }

      validateAuth(user);
    } catch (error) {
      throw error;
    }
  };

  const handleLogOut = async () => {
    await logOut();
    localStorage.removeItem("authToken");
    setSession({ userId: null, status: "no-authenticated" });
    return navigate("/login");
  };

  const currentUser = () => {
    const { data, loading } = useQuery(GET_MEMBER_BY_ID, {
      variables: {
        memberByIdId: session.userId,
      },
    });

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

      return { ...session, ...data.memberById };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...session,
        currentUser,
        handleLoginWithGoogle,
        handleLoginWithEmailAndPass,
        handleLogOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
