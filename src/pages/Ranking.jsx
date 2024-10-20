import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';


const Ranking = () => {
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