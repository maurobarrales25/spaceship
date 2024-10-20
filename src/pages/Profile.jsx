import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSpring, animated } from '@react-spring/web';

const Profile = () => {
    const { user } = useAuth0();
    
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);

    const animationProps = useSpring({
        opacity: isAnimating ? 1 : 0,
        config: { duration: 1000 }
    });

    const handleGoBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate("/");
        }, 1000); 
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
                    top: '25px',
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

            {isAnimating && (
                <animated.div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '24px',
                    ...animationProps
                }}>
                    Loading...
                </animated.div>
            )}

            <div style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.7)", 
                padding: "30px", 
                borderRadius: "10px", 
                textAlign: "center",
                color: "white"
            }}>
                <h1>Perfil de {user.name}</h1>
                <p style={{fontWeight:"600", fontStyle:"italic"}}>Records and Games Played:</p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{fontWeight:"500", textDecoration:"underline"}}>Reflex</li>
                    <li>Best Time:</li>
                    <li>Games Played:</li>
                    <hr />
                    <li style={{fontWeight:"500", textDecoration:"underline"}}>Memory</li>
                    <li>Best Score:</li>
                    <li>Games Played:</li>
                    <hr />
                    <li style={{fontWeight:"500", textDecoration:"underline"}}>Learning</li>
                    <li>Best Score:</li>
                    <li>Games Played:</li>
                    <hr />
                    <li style={{fontWeight:"500", textDecoration:"underline"}}>Musical</li>
                    <li>Best Score:</li>
                    <li>Games Played:</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
