import { useMutation, useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CURRENT_MEMBER } from "./graphql/getMemberById";
import { redirect, useNavigate } from "react-router-dom";
import {
  getAdditionlInfo,
  signUpWithEmailPassword,
  signInWithEmailAndPass,
  signInWithGoogle,
  logOut,
} from "../auth/services";
import { CREATE_MEMBER } from "../pages/SignUpMemberPage/graphql/addMember";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const { data, error, refetch } = useQuery(CURRENT_MEMBER, {
    skip: !authToken,
  });

  const [createMember] = useMutation(CREATE_MEMBER);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();
      const moreInfo = getAdditionlInfo(result);
      const { user } = result;

      if (user && token) {
        localStorage.setItem("authToken", token);

        if (moreInfo.isNewUser) {
          await createMember({
            variables: {
              data: {
                firebaseId: user.uid,
                email: user.email,
              },
            },
          });

          setUser({
            uid: user.uid,
            email: user.email,
          });
          // redirect("/signup");
        }

        await refetchUser();
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSignupWithEmailAndPassword = async (email, password) => {
    try {
      const user = await signUpWithEmailPassword(email, password);
      const token = await user.getIdToken();

      if (user && token) {
        localStorage.setItem("authToken", token);
      }
      await createMember({
        variables: {
          data: {
            firebaseId: user.uid,
            email: user.email,
          },
        },
      });
      refetch();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (data && data.currentMember) {
      setUser(data.currentMember);
      setLoading(false);
    } else if (!authToken) {
      // navigate('/login');
      setLoading(false);
    } else if (error) {
      console.error("There is an error so we handle it", error.message);
      setLoading(false);
    }
  }, [data, error, authToken]);

  const refetchUser = async () => {
    setLoading(true);
    await refetch();
  };

  const values = {
    user,
    refetchUser,
    handleLoginWithEmailAndPass,
    handleSignupWithEmailAndPassword,
    handleGoogleLogin,
    handleLogout,
    loading,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const handleLoginWithEmailAndPass = async (email, password) => {
  try {
    const user = await signInWithEmailAndPass(email, password);
    const token = await user.getIdTokenResult();

    // Store the auth token in localStorage
    if (user && token) {
      localStorage.setItem("authToken", token.token);
    }
  } catch (error) {
    throw error;
  }
};

export const handleLogout = async () => {
  try {
    await logOut();

    localStorage.removeItem("authToken");

    return;
  } catch (error) {
    throw error;
  }
};
