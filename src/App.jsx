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
>>>>>>> 78daf92 (add new route for stripe onboarding (#45))
=======
import { Dashboard } from './pages/Dashboard/Dashboard';
>>>>>>> ad6dd25 (add layout (#48))

function App() {
  const { status } = useContext(AuthContext);
  const [theme, colorMode] = useMode();

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
>>>>>>> 78daf92 (add new route for stripe onboarding (#45))
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
