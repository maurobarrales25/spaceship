import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Mesh from "../components/Mesh";
import Header from "../components/Header";
import { GameContext } from "../context/contextGame";


const Reflex = () => {
    const navigate = useNavigate();
    const { game } = useContext(GameContext);

    const [screens, setScreens] = useState(
        Array.from({ length: 6 }, (_, index) => ({
            id: index + 1,
            active: false,
            reactionTime: null,
        }))
    );
    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(0); 
    const [reactionTimes, setReactionTimes] = useState([]);
    const [currentScreen, setCurrentScreen] = useState(null);  
    const [startTime, setStartTime] = useState(null); 
    const [hits, sethits] = useState(0); 
    const [showReactionTimes, setShowReactionTimes] = useState(false); 

    const startGame = () => {
        setGameStarted(true);
        setTimer(0);
        setReactionTimes([]);
        sethits(0); 
        setCurrentScreen(null);
        activateRandomScreen(); 
    };

    useEffect(() => {
        let interval;
        if (gameStarted) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        if (timer >= 15) {
            clearInterval(interval);
            setGameStarted(false); 
            setCurrentScreen(null); 
        }

        return () => clearInterval(interval);
    }, [gameStarted, timer]);

    const activateRandomScreen = () => {
        const randomIndex = Math.floor(Math.random() * screens.length);
        const newScreens = screens.map((screen, index) => ({...screen, active: index === randomIndex}));
        setScreens(newScreens);
        setCurrentScreen(randomIndex);
        setStartTime(Date.now()); 
    };

    const handleScreenClick = (id) => {
        if (!gameStarted || currentScreen === null) return;

        const clickedScreen = screens.find(screen => screen.id === id);

        if (clickedScreen.active) {
            const reactionTime = (Date.now() - startTime) / 1000; 
            setReactionTimes([...reactionTimes, reactionTime]);
            sethits(hits + 1); 
            
            const newScreens = screens.map((screen) => ({
                ...screen,
                active: false,
            }));
            setScreens(newScreens);
            setCurrentScreen(null);

            setTimeout(() => {
                if (timer < 30) {
                    activateRandomScreen(); 
                }
            }, game.difficulty * 1000); 
        }
    };

    const toggleReactionTimes = () => {
        setShowReactionTimes(!showReactionTimes);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundImage: 'url("/Photos/starr.jpg")',
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            minHeight: "100vh", 
            color: "white",
            overflow: 'hidden',
        }}>

            {/* Botón para volver al inicio */}
            <button 
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
                onClick={() => navigate('/')}
            >
                Return Home
            </button>

            <div >
                <Header
                    title={`Reflex Mode ${game.mode}`} 
                    onStart={startGame}
                    />
                {gameStarted && <h2>Time: {timer}s</h2>}
            </div>
        
            <Mesh screens={screens} onScreenClick={handleScreenClick} mode="reflex"/>

            {!gameStarted && (
                <div>
                    <button onClick={toggleReactionTimes} style={{backgroundColor: "rgba(151, 191, 209, 0.6)", color: "white", fontFamily: "sans-serif", fontWeight: "550", border:"0", borderRadius:"20px"}}>
                        {showReactionTimes ? "Hide Reaction Times" : "Show Reaction Times"}
                    </button>
                </div>
            )}

            {showReactionTimes && (
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <h3>Reaction Times</h3>
                    {reactionTimes.map((time, index) => (
                        <p key={index}>Screen {index + 1}: {time} seconds</p>
                    ))}
                </div>
            )}


            {!gameStarted && timer >= 15 && (
                <div>
                    <h2>Game Over!</h2>
                    <h3>Number of Hits: {hits}</h3> 
                </div>
            )}
        </div>
    );
};


export default Reflex;
