import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reflex from "./pages/Reflex";
import Memory from "./pages/Memory";
import Learning from "./pages/Learning";
import Login from "./pages/Login"; 
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking"; 
import GameDesc from "./pages/GameDesc";
import Musical from "./pages/Musical";
import './App.css';
import GameProvider from "./context/contextGame";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProvider } from "../src/context/userContext";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <GameProvider>
      <UserProvider>
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
            <Route path="/musical" element={<Musical />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/gamedesc" element={<GameDesc />} />
          </Routes>
        </Router>
      </UserProvider>
    </GameProvider>
  );
};

export default App;
