import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import { ProtectedRoute } from "./components/PrivateRoute";
import ContractForm from "./pages/ContractForm/ContractForm";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import ConfirmationPage from "./pages/ComingSoon/ConfirmationPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme/theme";
import Services from "./pages/services";
import Invoices from "./pages/Invoices";
import FAQ from "./pages/Faq";
import Topbar from "./dashboard/TopBar";
import Sidebar from "./dashboard/Sidebar";
import MemberSettings from "./pages/MemberSettingsPage";
import Dashboard from "./dashboard/Dashboard";
import MemberChat from "./pages/MemberChat/MemberChat";
import MemberSettingsForm from "./pages/MemberSettingsPage/MemberSettingsForm/index";
import ChangePasswordPage from "./pages/MemberSettingsPage/ChangePassword";
import MemberShipTier from "./pages/MemberSettingsPage/MembershipTierPage/MembershipTier";

function App() {
  const { status, userId } = useContext(AuthContext);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  useEffect(() => {
    console.log({ status, userId });
  }, [status]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <div className="content-container">
            <Topbar setIsSidebar={setIsSidebar} />{" "}
            {/* <Sidebar isSidebar={isSidebar} /> */}
            <Routes>
              <Route path="/loginpage" element={<LoginPage />} />
              {/* <Route path="/member" element={<ContractForm />} /> */}
              <Route path="/" element={<ComingSoon />} />
              <Route path="/confirmationPage" element={<ConfirmationPage />} />
              {/* <Route
          path="/test"
          element={
            <ProtectedRoute status={status}>
              <h1>Test Private</h1>
            </ProtectedRoute>
          }
        /> */}
              <Route
                path="/MemberSettingsForm"
                element={<MemberSettingsForm />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/membersettings" element={<MemberSettings />} />
              <Route path="/MemberShipTier" element={<MemberShipTier />} />
              <Route path="/MemberChat" element={<MemberChat />} />
              <Route
                path="/ChangePasswordPage"
                element={<ChangePasswordPage />}
              />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
