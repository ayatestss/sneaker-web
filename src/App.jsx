import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import ErrorPage from './pages/ErrorPage';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/authContext';
import { ProtectedRoute } from './components/PrivateRoute';
// import ContractForm from './pages/ContractForm/ContractForm';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import ConfirmationPage from './pages/ComingSoon/ConfirmationPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './theme/theme';
import Services from './pages/services';
import Invoices from './pages/invoices';
import FAQ from './pages/faq';
import Topbar from './dashboard/TopBar';
import Sidebar from './dashboard/Sidebar';
// import MemberSettings from './pages/membersettings';
import Dashboard from './dashboard/Dashboard';
import MemberChat from './pages/MemberChat/MemberChat';
import SignupPage from './pages/SignupPage/SignupPage';
import { LogoutPage } from './pages/Logout/LogoutPage';

function App() {
  const { status } = useContext(AuthContext);
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content-container">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/member" element={<ContractForm />} /> */}
              <Route path="/" element={<ComingSoon />} />
              <Route path="/confirmationPage" element={<ConfirmationPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute status={status}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedRoute status={status}>
                    <SignupPage />
                  </ProtectedRoute>
                }
              />
              <Route path="logout" element={<LogoutPage />} />
              {/* <Route
                path="/MemberSettingsForm"
                element={<MemberSettingsForm />}
              /> */}
              {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/membersettings" element={<MemberSettings />} />
              <Route path="/MemberShipTier" element={<MemberShipTier />} />
              <Route path="/MemberChat" element={<MemberChat />} /> */}
              {/* <Route
                path="/ChangePasswordPage"
                element={<ChangePasswordPage />}
              /> */}
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
