import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        navigate("/reflex"); // Redirige a la página Reflex
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to Reflex Game</h1>
            <p>Click the button below to start the game.</p>
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
                Start Reflex Game
            </button>
        </div>
    );
};

export default Home;
