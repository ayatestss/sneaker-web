import "./App.css";

import { Button } from "@mui/material";
import LoginPage from "./pages/Login/LoginPage";
import { Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes> */}

      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
