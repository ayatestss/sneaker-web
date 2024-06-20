<<<<<<< HEAD
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme/theme";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ErrorPage from "./pages/ErrorPage";
=======
=======
>>>>>>> a172c5f ("Signup member page first commit")
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './theme/theme';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import ErrorPage from './pages/ErrorPage';
import StripeSignupPage from './pages/StripeSignUpPage/StripeSignupPage';
import LoginPage from './pages/Login/LoginPage';
import { ProtectedRoute } from './components/PrivateRoute';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 78daf92 (add new route for stripe onboarding (#45))
=======
import { Dashboard } from './pages/Dashboard/Dashboard';
>>>>>>> ad6dd25 (add layout (#48))
=======
import { Dashboard } from './pages/Dashboard/Dashboard';
=======
=======
=======
>>>>>>> b89ea4a ("Signup member page first commit")
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme/theme";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ErrorPage from "./pages/ErrorPage";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import ContractStatusWidget from "./components/ContractStatusWidget/ContractStatusWidget";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b86d59f ("made ui updates & seperated backend code")
<<<<<<< HEAD
>>>>>>> 8df64ec ("made ui updates & seperated backend code")
<<<<<<< HEAD
>>>>>>> 06bfe7a ("made ui updates & seperated backend code")
=======
=======
=======
import StripeWidget from "./components/StripeWidget/StripeWidget";
>>>>>>> e620c52 ("Stripe Widget Component")
>>>>>>> 9f9bc6c ("Stripe Widget Component")
<<<<<<< HEAD
>>>>>>> ee37dc1 ("Stripe Widget Component")
=======
=======
=======
//import ContractStatusWidget from "./components/ContractStatusWidget/ContractStatusWidget";
>>>>>>> a83c9e7 ("signup-member page")
=======
// import ContractStatusWidget from "./components/ContractStatusWidget/ContractStatusWidget";
>>>>>>> ba8abd6 ("UI Updates, Signup form correctly displayed")
import StripeWidget from "./components/StripeWidget/StripeWidget";
import SignupMember from "./pages/Signup-Member/Signup-Member";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
<<<<<<< HEAD
>>>>>>> b89ea4a ("Signup member page first commit")
<<<<<<< HEAD
>>>>>>> a172c5f ("Signup member page first commit")
=======
=======
import { setContext } from "@apollo/client/link/context";
import { ProtectedRoute } from "./components/PrivateRoute";
>>>>>>> ba8abd6 ("UI Updates, Signup form correctly displayed")
<<<<<<< HEAD
>>>>>>> e9cc1a1 ("UI Updates, Signup form correctly displayed")
=======
=======
>>>>>>> 3f6d4b3 ("removed widget files")
>>>>>>> a5b1b03 ("removed widget files")

function App() {
  const { status } = useContext(AuthContext);
  const [theme, colorMode] = useMode();

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a5b1b03 ("removed widget files")
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/contract-status"
                element={<ContractStatusWidget />}
              />
<<<<<<< HEAD
>>>>>>> 93fbbd1 ("Frontend UI for contract status widget")
>>>>>>> 9f9bc6c ("Stripe Widget Component")
=======
>>>>>>> b89ea4a ("Signup member page first commit")

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("authToken");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

>>>>>>> ee37dc1 ("Stripe Widget Component")
  return (
<<<<<<< HEAD
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Error Page Route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
=======
    <ApolloProvider client={client}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
                <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
                <Route path="stripeOnboarding" element={<StripeSignupPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Protected Routes */}
=======
>>>>>>> b89ea4a ("Signup member page first commit")
=======
                {/* <Route path="/login" element={<LoginPage />} /> */}
>>>>>>> a83c9e7 ("signup-member page")
                <Route
                  path="/signup"
                  element={
                    <ProtectedRoute status={status}>
                      <SignupPage />
                    </ProtectedRoute>
                  }
                />
                {/* <Route
                  path="/contract-status"
                  element={<ContractStatusWidget />}
                /> */}
                <Route path="/stripewidget" element={<StripeWidget />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/SignupMember" element={<SignupMember />} />
              </Routes>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 78daf92 (add new route for stripe onboarding (#45))
=======
=======
              <Route path="/stripewidget" element={<StripeWidget />} />
              {/* Error Page Route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
>>>>>>> e620c52 ("Stripe Widget Component")
>>>>>>> ee37dc1 ("Stripe Widget Component")
=======
>>>>>>> a172c5f ("Signup member page first commit")
=======
=======
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />

              {/* Error Page Route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
>>>>>>> 3f6d4b3 ("removed widget files")
>>>>>>> a5b1b03 ("removed widget files")
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
