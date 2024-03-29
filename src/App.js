import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// pages

import SandboxPage from "./pages/sandbox-page";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SandboxPage />} />
    </Routes>
  </Router>
);

export default App
