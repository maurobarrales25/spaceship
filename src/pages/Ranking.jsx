import React from 'react';
import { useNavigate } from "react-router-dom";

const Ranking = () => {
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
            backgroundImage: 'url("/Photos/homeimg.jpg")', 
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
                color: "white"
            }}>
                <h1>Rankings</h1>
                <p>Time and Score Records:</p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>Reflex:</li>
                    <hr />
                    <li>Memory:</li>
                    <hr />
                    <li>Learning:</li>
                    <hr />
                    <li>Musical:</li>
                </ul>
            </div>
        </div>
    );
};

export default Ranking;