import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; 
import Reflex from "./pages/Reflex"; 
import Memory from "./pages/Memory";
import './App.css';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/reflex" element={<Reflex />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </Router>
  );
};

export default App;
