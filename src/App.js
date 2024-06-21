import React from "react";

import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import ForgotPassword from "./components/sub_components/ForgotPassword";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot_password" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
