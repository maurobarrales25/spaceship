import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleStartReflexGame = () => {
        navigate("/reflex"); 
    };

    const handleStartMemoryGame = () => {
        navigate("/memory"); 
    };

    return (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
            <h1>Welcome to Gaming Beyond Earth!</h1>
            <p>Pick your Game Mode</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <button
                    onClick={handleStartReflexGame}
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

                <button
                    onClick={handleStartMemoryGame}
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
                    Play Memory Mode
                </button>
            </div>
        </div>
    );
};

export default Home;
