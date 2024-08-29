import { gql, useMutation, useQuery } from "@apollo/client";
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

const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id
    }
  }
`;

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      email
      isNewUser
    }
  }
`;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const {
    data: currentMemberData,
    error: currentMemberError,
    refetch: currentMemberRefetch,
  } = useQuery(CURRENT_MEMBER, {
    skip: !authToken,
  });

  const {
    data: currentUserData,
    error: currentUserError,
    refetch: currentUserRefetch,
  } = useQuery(CURRENT_USER, {
    skip: !authToken,
  });

  const [createMember] = useMutation(CREATE_MEMBER);
  const [createUser] = useMutation(CREATE_USER);

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

  const handleSignupWithEmailAndPassword = async (
    email,
    password,
    userType
  ) => {
    try {
      const user = await signUpWithEmailPassword(email, password);
      const token = await user.getIdToken();

      if (user && token) {
        localStorage.setItem("authToken", token);
      }

      if (userType === "MEMBER") {
        await createMember({
          variables: {
            data: {
              firebaseId: user.uid,
              email: user.email,
            },
          },
        });
        currentMemberRefetch();
      }

      if (userType === "USER") {
        await createUser({
          variables: {
            data: {
              firebaseId: user.uid,
              email: user.email,
            },
          },
        });
        await currentUserRefetch()
      }

      await refetchUser();
    } catch (error) {
      throw error;
    }
  };

  const handleLoginWithEmailAndPass = async (email, password, userType) => {
    try {
      const result = await signInWithEmailAndPass(email, password);
      console.log(result);
      const token = await result.user.getIdToken();
      console.log({ token });
      const { user } = result;

      // Store the auth token in localStorage
      if (user && token) {
        localStorage.setItem("authToken", token);
      }

      if (userType === "USER") {
        setUser({
          uid: user.uid,
          email: user.email,
        });
        setLoading(false);
        navigate("/user/dashboard");
      }
      await currentUserRefetch();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (currentMemberData && currentMemberData.currentMember) {
      setUser(currentMemberData.currentMember);
      setLoading(false);
    } else if (currentUserData && currentUserData.currentUser) {
      console.log("setting User");
      setUser(currentUserData.currentUser);
      setLoading(false);
    } else if (!authToken) {
      // navigate('/login');
      setLoading(false);
    } else if (currentMemberError) {
      console.error(
        "There is an error so we handle it",
        currentMemberError.message
      );
      setLoading(false);
    }
  }, [currentMemberData, currentMemberError, authToken, currentUserData, user]);

  const refetchUser = async () => {
    setLoading(true);
    await currentMemberRefetch();
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

export const handleLogout = async () => {
  try {
    await logOut();

    localStorage.removeItem("authToken");

    return;
  } catch (error) {
    throw error;
  }
};
