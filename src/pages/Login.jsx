import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

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
        }}>
            <div style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.7)", 
                padding: "30px", 
                borderRadius: "10px", 
                textAlign: "center"
            }}>
                <h1 style={{ color: "white" }}>Login:</h1>
                <p style={{ color: "white", marginBottom: "20px" }}>Access your account to play</p>
                <button
                    onClick={() => loginWithRedirect()}
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        cursor: "pointer",
                        backgroundColor: "#7cd6bb",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        borderBottom: "3px solid #5a8c7d",
                        borderLeft: "3px solid #5a8c7d",
                    }}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
