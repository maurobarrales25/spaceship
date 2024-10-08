import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        navigate("/reflex"); 
    };

    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
            <h1>Welcome to Gaming Beyond Earth!</h1>
            <p>Pick your Game Mode</p>
            <button
                onClick={handleStartGame}
                style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                    cursor: "pointer",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Play Reflex Mode
            </button>
        </div>
    );
};

export default Home;
