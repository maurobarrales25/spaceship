import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';
import dataService from '../services/dataService';


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

    const [scores, setScores] = useState({
        reflex: [],
        memory: [],
        learning: [],
        musical: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get('URL_DEL_BACKEND/ranking'); // acá va el URL del backend + /ranking
                setScores(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching scores:', error);
                setIsLoading(false);
            }
        };

        fetchScores();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
                    <li>Reflex</li>
                    <ul>
                        {scores.reflex.map((score, index) => (
                            <li key={index}>{score.username}: {score.score}</li>
                        ))}
                    </ul>
                    <hr />
                    <li>Memory</li>
                    <ul>
                        {scores.memory.map((score, index) => (
                            <li key={index}>{score.username}: {score.score}</li>
                        ))}
                    </ul>
                    <hr />
                    <li>Learning</li>
                    <ul>
                        {scores.learning.map((score, index) => (
                            <li key={index}>{score.username}: {score.score}</li>
                        ))}
                    </ul>
                    <hr />
                    <li>Musical</li>
                    <ul>
                        {scores.musical.map((score, index) => (
                            <li key={index}>{score.username}: {score.score}</li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default Ranking;