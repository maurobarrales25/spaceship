import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Reflex from "./pages/Reflex"; 
import Memory from "./pages/Memory";
import Learning from "./pages/Learning";
import './App.css';
import GameProvider from "./context/contextGame";


const App = () => {
  
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/reflex" element={<Reflex />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/learing" element={<Learning />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
