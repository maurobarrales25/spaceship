import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useAuth0(); // Obtener la información del usuario

    const handleStartReflexGame = () => {
        navigate("/reflex"); 
    };

    const handleStartMemoryGame = () => {
        navigate("/memory"); 
    };

    const handleStartLearningGame = () => {
        navigate("/Learning"); 
    };

    const handleStartMusicalGame = () => {
        navigate("/Musical"); 
    };

    const goToProfile = () => {
        navigate("/profile");
    };

    const goToRanking = () => {
        navigate("/Ranking");
    };

    const goToGameDesc = () => {
        navigate("/GameDesc");
    };

    const handleStartExtremeGame = () => {
        navigate("/extreme")
    }

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "center", 
            textAlign: "center", 
            marginTop: "0px", 
            backgroundImage: 'url("/Photos/homeimg.jpg")', 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", 
            position: "relative"
        }}>
            {/* Hacer el nombre del usuario un botón que redirige a Profile */}
            {isAuthenticated && (
                // <button
                //     style={{
                //         position: "absolute", 
                //         top: "10px", 
                //         left: "10px", 
                //         padding: "10px 20px",
                //         fontSize: "18px",
                //         cursor: "pointer",
                //         backgroundColor: "#7cd6bb",
                //         color: "white",
                //         border: "none",
                //         borderRadius: "5px",
                //         borderBottom: "3px solid #5a8c7d",
                //         borderLeft: "3px solid #5a8c7d",
                //     }}
                //     onClick={goToProfile}
                // >
                //     {user.name}
                // </button>
                <div> 
                    <button className="btn btn-primary" onClick={goToProfile}
                        style={{
                            background: 'none', border: 'none', padding: 0,
                            position: "absolute",
                            top: "20px",
                            left: "20px", 
                            cursor: "pointer",
                        }}>
                        <img 
                            src={user.picture} // Mostrar imagen de perfil si está disponible
                            alt="Profile"
                            style={{
                                width: "52px", 
                                height: "52px", 
                                borderRadius: "50%", 
                                objectFit: "cover"
                            }} 
                        />
                    </button>

                    <button
                        style={{
                            color:"white",
                            background: 'none', border: 'none', padding: 0,
                            position: "absolute",
                            top: "25px",
                            left: "60px", 
                            padding: "10px 20px",
                            cursor: "pointer",
                            fontSize: "15px",
                            fontFamily: 'Orbitron, sans-serif',
                            fontWeight: "600"
                        }}
                        onClick={goToProfile}
                    >
                        {user.name}
                    </button>
                </div>
                   
            )}

            {/* Botón de Logout en la esquina superior derecha */}
            <button
                style={{
                    position: "absolute",
                    top: "25px",
                    right: "12px",
                    backgroundColor: "#ff4b5c",
                    color: "white",
                    border: "none",
                    padding: "8px 10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    borderBottom: "3px solid #b0454f",
                    borderLeft: "3px solid #b0454f",
                    fontSize: "17px",
                    fontFamily: "system-ui"
                }}
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Sign out
            </button>

            <div>
                <img src="./Photos/image.png" alt="" style={{borderRadius: "20px", width: "7rem", objectFit: "contain"}}/>
            </div>
            <h1 style={{ color: "white", margin: "0"}}>Welcome to Gaming Beyond Earth!</h1>
            <p style={{ color: "white", fontWeight: "450"}}>Pick your Game Mode</p>

            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"20px"}}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", marginTop: "40px"}}>
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
                    </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", marginTop: "40px"}}>
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

                    <button
                        onClick={handleStartMusicalGame}
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
                        Play Musical Mode
                    </button>
                </div>
            </div>
            


            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", marginTop: "40px"}}>

                <button
                    onClick={handleStartExtremeGame}
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        cursor: "pointer",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",    
                    }}
                >
                    Play Extreme Mode
                </button>
                    
                <button
                    onClick={goToRanking}
                    style={{
                        padding: "10px 60px",
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
                    Ranking
                </button>

                <button
                    onClick={goToGameDesc}
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
                    Game Descriptions
                </button>
            </div>
        </div>
    );
};

export default Home;
