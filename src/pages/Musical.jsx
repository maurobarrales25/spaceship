import React, { useState, useEffect, useContext, useRef } from 'react';
import Mesh from '../components/Mesh';  
import Header from '../components/Header';
import { GameContext } from '../context/contextGame';
import { useNavigate } from 'react-router-dom';
import { sendScore } from '../services/dataService';

const Musical = () => {
    const navigate = useNavigate();
    const { game } = useContext(GameContext);
    const [screens, setScreens] = useState([
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
        { id: 6, active: false },
    ]);
    const [sequence, setSequence] = useState([]);  
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [userSequence, setUserSequence] = useState([]); 
    const [isPlaying, setIsPlaying] = useState(false);
    const [message, setMessage] = useState('Press "Start Game!" to begin the game');
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState("easy"); 
    const audioRef = useRef(null);  
    const [musicStarted, setMusicStarted] = useState(false);
    const [musicPaused, setMusicPaused] = useState(true);  
    const pauseTimeoutRef = useRef(null); 

    const songs = {
        easy: "/Sounds/Sam Smith - I'm Not The Only One (Lyrics).mp3",
        normal: "/Sounds/Britney Spears - Baby One More Time (Lyrics).mp3",
        hard: "/Sounds/Goodies.mp3"
    };

    const difficultyDurations = {
        easy: 1200,
        normal: 800,
        hard: 500
    };

    const resetScreens = () => {
        setScreens(screens.map(screen => ({ ...screen, active: false })));
    };

    const resetGame = () => {
        sendScore(score)
            .then(response => {
                console.log('Score sent successfully:', response);
            })
            .catch(error => {
                console.error('Error sending score:', error);
            });
        setSequence([]);
        setUserSequence([]);
        setCurrentIndex(0);
        setScore(0);
        setIsPlaying(false);
        resetScreens();
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();          
        }
        setMusicPaused(true);  
        setMusicStarted(false);
        clearTimeout(pauseTimeoutRef.current);
        setMessage('Press "Start Game!" to begin the game');
    };

    const startGame = () => {
        resetGame();
        setMessage('Follow the rhythm of the music');
        const newSequence = generateSequence(1);
        setSequence(newSequence);
        setUserSequence([]);
        setScore(0);
        setCurrentIndex(0);
        setIsPlaying(true);
  
        if (audioRef.current) {
            audioRef.current.src = songs[difficulty];
        }

        setTimeout(() => {
            showNextCircle(0, newSequence);
        }, difficultyDurations[difficulty]);
    };

    const generateSequence = (length) => {
        const newSequence = [];
        for (let i = 0; i < length; i++) {
            const randomId = Math.floor(Math.random() * screens.length) + 1;
            newSequence.push(randomId);
        }
        return newSequence;
    };

    const showNextCircle = (index, sequence) => {
        if (index >= sequence.length) return;  

        setCurrentIndex(index);  

        const currentId = sequence[index];
        activateScreen(currentId);

        setMessage("Now it's your turn to click!");

        if (musicStarted) {
            pauseTimeoutRef.current = setTimeout(() => {
                if (audioRef.current && !musicPaused) {
                    audioRef.current.pause();
                    setMusicPaused(true);
                }
            }, difficultyDurations[difficulty]);
        }
    };

    const activateScreen = (id) => {
        setScreens((prevScreens) =>
            prevScreens.map((screen) =>
                screen.id === id ? { ...screen, active: true } : screen
            )
        );
    };

    const deactivateScreen = (id) => {
        setScreens((prevScreens) =>
            prevScreens.map((screen) =>
                screen.id === id ? { ...screen, active: false } : screen
            )
        );
    };

    const handleScreenClick = (id) => {
        if (!isPlaying || currentIndex >= sequence.length) return;

        const currentId = sequence[currentIndex];

        if (id === currentId) {
            setMessage('Correct! Get ready for the next one');
            setScore(score + 1);

            if (!musicStarted) {
                setMusicStarted(true);
                if (audioRef.current) {
                    audioRef.current.play();
                    setMusicPaused(false);
                }
            }

            clearTimeout(pauseTimeoutRef.current);

            if (audioRef.current && musicPaused) {
                audioRef.current.play();
                setMusicPaused(false);
            }

            deactivateScreen(id);

            setTimeout(() => {
                setUserSequence([...userSequence, id]);  
                const nextIndex = currentIndex + 1;

                if (nextIndex < sequence.length) {
                    setTimeout(() => {
                        showNextCircle(nextIndex, sequence);
                    }, difficultyDurations[difficulty]);
                } else {
                    const newSequence = [...sequence, ...generateSequence(1)];
                    setSequence(newSequence);
                    setCurrentIndex(0);  
                    setTimeout(() => {
                        showNextCircle(0, newSequence);
                    }, difficultyDurations[difficulty]);
                }
            }, 500);
        } else {
            setMessage('Incorrect. Press "Start Game!" to retry.');
            if (audioRef.current) audioRef.current.pause();
            setIsPlaying(false);  
        }
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
            backgroundPosition: "center",
            height: "100vh", 
            color: "white", 
        }}>
            <button 
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
                onClick={() => navigate('/')}
            >
                Return Home
            </button>

            <div style={{display: "flex", alignItems: "center", gap: "10px", marginTop:"20px"}}>
                <label style={{ fontSize: "18px", color: "white" }}>Select Difficulty:</label>
                <select 
                    value={difficulty} 
                    onChange={(e) => setDifficulty(e.target.value)} 
                    style={{
                        backgroundColor: "rgba(151, 191, 209, 0.6)",
                        color: "white",
                        fontFamily: "sans-serif",
                        fontWeight: "550",
                        border: "0",
                        borderRadius: "20px" 
                        }}>
                    <option value="easy">Easy (1.2 seconds)</option>
                    <option value="normal">Normal (0.8 seconds)</option>
                    <option value="hard">Hard (0.5 seconds)</option>
                </select>
            </div>

            <audio ref={audioRef} loop />

            <Header title="Musical Game" onStart={startGame} mode="musical" />

            <p>{message}</p>

            <Mesh screens={screens} onScreenClick={handleScreenClick} mode="musical" isClickable={isPlaying} />
            
            <p>Score: {score}</p>
        </div>
    );
};

export default Musical;