import { useMutation, useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CURRENT_MEMBER } from "./graphql/getMemberById";
import { useNavigate } from "react-router-dom";
import {
  getAdditionlInfo,
  signUpWithEmailPassword,
  signInWithEmailAndPass,
  signInWithGoogle,
  logOut,
} from "../auth/services";
import { CREATE_MEMBER } from "../pages/SignUpMemberPage/graphql/addMember";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("authToken"));

  const { data, error, refetch } = useQuery(CURRENT_MEMBER, {
    skip: !authToken,
    onError: (error) => {
      console.error("Error fetching current member:", error);
      if (error.message.includes("unauthorized")) {
        handleTokenError();
      }
    }
  });

  const [createMember] = useMutation(CREATE_MEMBER, {
    onError: (error) => {
      console.error("Error creating member:", error);
      throw error;
    }
  });

  const handleTokenError = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setUser(null);
    navigate('/login');
  };

  const setToken = async (firebaseUser) => {
    try {
      const token = await firebaseUser.getIdToken();
      localStorage.setItem("authToken", token);
      setAuthToken(token);
      return token;
    } catch (error) {
      console.error("Error setting token:", error);
      handleTokenError();
      throw error;
    }
  };

  const refetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await refetch();
      if (data?.currentMember) {
        setUser(data.currentMember);
      }
    } catch (error) {
      console.error("Error refetching user:", error);
      handleTokenError();
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      const moreInfo = getAdditionlInfo(result);
      const { user: firebaseUser } = result;

      if (!firebaseUser) throw new Error("No user returned from Google login");

      await setToken(firebaseUser);

      if (moreInfo.isNewUser) {
        await createMember({
          variables: {
            data: {
              firebaseId: firebaseUser.uid,
              email: firebaseUser.email,
            },
          },
        });
      }

      await refetchUser();
      return firebaseUser;
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignupWithEmailAndPassword = async (email, password) => {
    setLoading(true);
    try {
      const firebaseUser = await signUpWithEmailPassword(email, password);
      await setToken(firebaseUser);
      
      await createMember({
        variables: {
          data: {
            firebaseId: firebaseUser.uid,
            email: firebaseUser.email,
          },
        },
      });

      await refetchUser();
      return firebaseUser;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithEmailAndPass = async (email, password) => {
    setLoading(true);
    try {
      const firebaseUser = await signInWithEmailAndPass(email, password);
      await setToken(firebaseUser);
      await refetchUser();
      return firebaseUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logOut();
      localStorage.removeItem("authToken");
      setAuthToken(null);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data?.currentMember) {
      setUser(data.currentMember);
    } else if (error) {
      console.error("Error fetching current member:", error);
      if (error.message.includes("unauthorized")) {
        handleTokenError();
      }
    }
    setLoading(false);
  }, [data, error]);

  const value = {
    user,
    loading,
    isAuthenticated: !!user && !!authToken,
    refetchUser,
    handleLoginWithEmailAndPass,
    handleSignupWithEmailAndPassword,
    handleGoogleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;