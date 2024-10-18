import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reflex from "./pages/Reflex";
import Memory from "./pages/Memory";
import Learning from "./pages/Learning";
import Login from "./pages/Login"; 
import Profile from "./pages/Profile"; 
import './App.css';
import GameProvider from "./context/contextGame";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Login /> 
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/reflex" element={<Reflex />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
