import React from 'react';
import { useNavigate } from "react-router-dom";

const GameDesc = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            backgroundImage: 'url("homeimg.jpg")', 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            position: "relative" 
        }}>
            <button
                onClick={handleGoBack}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#8c8c8c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    borderBottom: "3px solid #6b6b6b",
                    borderLeft: "3px solid #6b6b6b"
                }}
            >
                Return Home
            </button>

            <div style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.7)", 
                padding: "30px", 
                borderRadius: "10px", 
                textAlign: "center",
                color: "white",
                maxWidth: "800px",
                margin: "0 auto"
            }}>
                <h1>Game Descriptions</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                }}>
                    <div style={{ width: '30%' }}>
                        <h3 style={{textDecoration:"underline"}}>Reflex</h3>
                        <p>This mode challenges the player's reaction time. Players must press the LED devices 
                            as quickly as possible when they light up. In competitive mode, astronauts race to 
                            see who can press the lights first, testing their reflexes and speed under 
                            microgravity conditions.</p>
                    </div>
                    <div style={{ width: '30%' }}>
                        <h3 style={{textDecoration:"underline"}}>Memory</h3>
                        <p>In this mode, a sequence of LEDs lights up, and the player must recall and press them 
                            in the correct order. This mode focuses on enhancing cognitive functions by 
                            challenging short-term memory and concentration.</p>
                    </div>
                    <div style={{ width: '30%' }}>
                        <h3 style={{textDecoration:"underline"}}>Learning</h3>
                        <p>Players are presented with multiple-choice questions on a tablet, with each LED 
                            corresponding to an answer. The player must select the correct answer by pressing the
                            associated LED, integrating cognitive learning with physical interaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDesc;
