import { Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/Login/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext";
import { ProtectedRoute } from "./components/PrivateRoute";
import ContractForm from "./pages/ContractForm/ContractForm";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Chat from "./pages/MemberChat/MemberChat";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  const { status, userId } = useContext(AuthContext);

  useEffect(() => {
    console.log({ status, userId });
  }, [status]);

  return (
    <div className="App">
      <Routes>
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/member" element={<ContractForm />} />
        <Route path="/" element={<ComingSoon />} />
        <Route path='/registerPage' element={<RegisterPage/>} />
        <Route path='/homePage' element={<HomePage/>} />
        <Route path="/MemberChat" element={<Chat />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route
          path="/test"
          element={
            <ProtectedRoute status={status}>
              <h1>Test Private</h1>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
