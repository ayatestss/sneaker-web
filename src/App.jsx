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
import ContractStatusWidget from "./components/Contract-Status-Widget";
>>>>>>> 93fbbd1 ("Frontend UI for contract status widget")
=======
import ContractStatusWidget from "./components/ContractStatusWidget/ContractStatusWidget";
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
>>>>>>> ee37dc1 ("Stripe Widget Component")

function App() {
  const { status } = useContext(AuthContext);
  const [theme, colorMode] = useMode();

<<<<<<< HEAD
=======
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
  });
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
                <Route path="/login" element={<LoginPage />} />
                <Route path="stripeOnboarding" element={<StripeSignupPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
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
>>>>>>> 78daf92 (add new route for stripe onboarding (#45))
=======
=======
              <Route path="/stripewidget" element={<StripeWidget />} />
              {/* Error Page Route */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
>>>>>>> e620c52 ("Stripe Widget Component")
>>>>>>> ee37dc1 ("Stripe Widget Component")
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
