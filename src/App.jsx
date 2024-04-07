<<<<<<< HEAD
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
import StripeWidget from "./components/StripeWidget/StripeWidget";
=======
=======
>>>>>>> 73636de ("Frontend UI for contract status widget")
=======
>>>>>>> 59681ca (Update auth (#46))
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './theme/theme';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import ErrorPage from './pages/ErrorPage';
<<<<<<< HEAD
import StripeSignupPage from './pages/StripeSignUpPage/StripeSignupPage';
=======
>>>>>>> c23c81e (Update auth (#46))
import LoginPage from './pages/Login/LoginPage';
import { ProtectedRoute } from './components/PrivateRoute';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c23c81e (Update auth (#46))
=======
import { Dashboard } from './pages/Dashboard/Dashboard';
<<<<<<< HEAD
>>>>>>> ad6dd25 (add layout (#48))
=======
=======
=======
>>>>>>> a5359c2 (Update auth (#46))
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
import ContractStatusWidget from "./components/Contract-Status-Widget";
>>>>>>> 93fbbd1 ("Frontend UI for contract status widget")
<<<<<<< HEAD
>>>>>>> 73636de ("Frontend UI for contract status widget")
=======
=======
import ContractStatusWidget from "./components/ContractStatusWidget/ContractStatusWidget";
>>>>>>> b86d59f ("made ui updates & seperated backend code")
<<<<<<< HEAD
>>>>>>> 8cd7a45 ("made ui updates & seperated backend code")
=======
=======
import StripeWidget from "./components/StripeWidget/StripeWidget";
>>>>>>> 49b42f4 ("removed contract status route")
>>>>>>> 94bc842 ("removed contract status route")
=======
>>>>>>> c23c81e (Update auth (#46))
=======
import { Dashboard } from './pages/Dashboard/Dashboard';
>>>>>>> ad6dd25 (add layout (#48))
=======
import ContractStatusWidget from "./components/Contract-Status-Widget";
>>>>>>> 93fbbd1 ("Frontend UI for contract status widget")
=======
import ContractStatusWidget from "./components/ContractStatusWidget/ContractStatusWidget";
import StripeWidget from "./components/StripeWidget/StripeWidget";
<<<<<<< HEAD
>>>>>>> e620c52 ("Stripe Widget Component")
<<<<<<< HEAD
>>>>>>> f9b51f6 ("Stripe Widget Component")
=======
=======
=======
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './theme/theme';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login/LoginPage';
import { ProtectedRoute } from './components/PrivateRoute';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
>>>>>>> c23c81e (Update auth (#46))
>>>>>>> a5359c2 (Update auth (#46))
>>>>>>> 59681ca (Update auth (#46))

function App() {
  const { status } = useContext(AuthContext);
  const [theme, colorMode] = useMode();

<<<<<<< HEAD
<<<<<<< HEAD
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });
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
<<<<<<< HEAD
              <Route
                path="/contract-status"
                element={<ContractStatusWidget />}
              />
<<<<<<< HEAD
>>>>>>> 93fbbd1 ("Frontend UI for contract status widget")

<<<<<<< HEAD
              <Route path="/stripewidget" element={<StripeWidget />} />
              {/* Error Page Route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
=======
=======
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

>>>>>>> c23c81e (Update auth (#46))
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('authToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
                <Route path="stripeOnboarding" element={<StripeSignupPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
=======

>>>>>>> c23c81e (Update auth (#46))
=======
>>>>>>> ad6dd25 (add layout (#48))
                {/* Protected Routes */}
                <Route
                  path="/signup"
                  element={
                    <ProtectedRoute status={status}>
                      <SignupPage />
                    </ProtectedRoute>
                  }
                />

                {/* Error Page Route */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c23c81e (Update auth (#46))
=======
=======
<<<<<<< HEAD

=======
=======
>>>>>>> f9b51f6 ("Stripe Widget Component")
=======
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });

<<<<<<< HEAD
>>>>>>> a5359c2 (Update auth (#46))
>>>>>>> 59681ca (Update auth (#46))
              <Route path="/stripewidget" element={<StripeWidget />} />
              {/* Error Page Route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 49b42f4 ("removed contract status route")
>>>>>>> 94bc842 ("removed contract status route")
=======
>>>>>>> c23c81e (Update auth (#46))
=======
>>>>>>> e620c52 ("Stripe Widget Component")
>>>>>>> f9b51f6 ("Stripe Widget Component")
=======
>>>>>>> e620c52 ("Stripe Widget Component")
=======
=======
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('authToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route
                  path="/signup"
                  element={
                    <ProtectedRoute status={status}>
                      <SignupPage />
                    </ProtectedRoute>
                  }
                />

                {/* Error Page Route */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
>>>>>>> c23c81e (Update auth (#46))
>>>>>>> a5359c2 (Update auth (#46))
>>>>>>> 59681ca (Update auth (#46))
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
