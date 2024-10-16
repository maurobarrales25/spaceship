import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Reflex from "./pages/Reflex"; 
import './App.css';
import GameProvider from "./context/contextGame";


const App = () => {
  
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/reflex" element={<Reflex />} /> 
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
