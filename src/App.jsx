import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme/theme";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import StripeSignupPage from "./pages/StripeSignUpPage/StripeSignupPage";
import LoginPage from "./pages/Login/LoginPage";
import { LogoutPage } from "./pages/Logout/LogoutPage";
import SignupMember from "./pages/SignUpMemberPage/SignUpMemberPage";
import { ProtectedRoute } from "./components/PrivateRoute";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Blockers } from "./components/Blockers";
import { UserSignUp } from "./pages/SignupPage/UserSignup";
import { UserDashboard } from "./pages/Dashboard/UserDashboard";
import { UserInfo } from "./pages/User/UserInfo";

function App() {
  // const { status } = useContext(AuthContext);
  const [theme, colorMode] = useMode();

  const httpLink = createHttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`,
  });

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
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="stripeOnboarding" element={<StripeSignupPage />} />
                <Route path="user/signup" element={<UserSignUp />} />
                <Route path="signupmember" element={<SignupMember />} />
                <Route
                  path="user/dashboard"
                  element={
                    <ProtectedRoute>
                      <UserDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <ProtectedRoute>
                      <SignupPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="user/info"
                  element={
                    <ProtectedRoute>
                      <UserInfo />
                    </ProtectedRoute>
                  }
                />

                {/* Error Page Route */}
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ApolloProvider>
  );
}

export default App;
