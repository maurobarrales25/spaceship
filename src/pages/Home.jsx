import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const navigate = useNavigate();
    const { logout } = useAuth0(); // Añadir Auth0 hook para cerrar sesión

    const handleStartReflexGame = () => {
        navigate("/reflex"); 
    };

    const handleStartMemoryGame = () => {
        navigate("/memory"); 
    };

    const handleStartLearningGame = () => {
        navigate("/Learning"); 
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center", 
            textAlign: "center", 
            marginTop: "0px", 
            backgroundImage: 'url("homeimg.jpg")', 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", 
            }}>
            {/* Botón de Logout en la esquina superior derecha */}
            <button
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#ff4b5c",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontSize: "14px"
                }}
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Cerrar sesión
            </button>

            <div>
                <img src="./image.png" alt="" style={{borderRadius: "20px", width: "7rem", objectFit: "contain"}}/>
            </div>
            <h1 style={{ color: "white", margin: "0"}}>Welcome to Gaming Beyond Earth!</h1>
            <p style={{ color: "white", fontSize: "600"}}>Pick your Game Mode</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", marginTop: "40px"  }}>
                <button
                    onClick={handleStartReflexGame}
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        cursor: "pointer",
                        backgroundColor: "#7cd6bb",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        borderBottom: "3px solid #5a8c7d",
                        borderLeft: "3px solid #5a8c7d"
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
                        backgroundColor: "#7cd6bb",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        borderBottom: "3px solid #5a8c7d",
                        borderLeft: "3px solid #5a8c7d"
                    }}
                >
                    Play Memory Mode
                </button>

                <button
                    onClick={handleStartLearningGame}
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        cursor: "pointer",
                        backgroundColor: "#7cd6bb",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        borderBottom: "3px solid #5a8c7d",
                        borderLeft: "3px solid #5a8c7d"
                    }}
                >
                    Play Learning Mode
                </button>
            </div>
        </div>
    );
};

export default Home;
