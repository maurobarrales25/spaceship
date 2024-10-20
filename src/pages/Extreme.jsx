import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';

const Extreme = () => {
    const navigate = useNavigate();
    const [screens, setScreens] = useState([
        { id: 1, active: false },
        { id: 2, active: false },
        { id: 3, active: false },
        { id: 4, active: false },
        { id: 5, active: false },
        { id: 6, active: false },
    ]);

    const [sequence, setSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [message, setMessage] = useState('Press "Start Game"');
    const [score, setScore] = useState(0);

    const LED_DURATION = 700;
    const timeLimit = 5;
    const [currentTime, setCurrentTime] = useState(timeLimit);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (isPlaying && userSequence.length === sequence.length) {
            checkSequence();
        }

        if (!isPlaying && timer) {
            clearInterval(timer);
            setTimer(null);
        }
    }, [userSequence, isPlaying]);

    const startGame = () => {
        setMessage('Survive!');
        const newSequence = generateRandomSequence(5);
        setSequence(newSequence);
        setUserSequence([]);
        setScore(0);
        setIsPlaying(false);
        playSequence(newSequence);
        setCurrentTime(timeLimit);
    };

    const generateRandomSequence = (length) => {
        const newSequence = [];
        const chosenIds = new Set();

        while (newSequence.length < length) {
            const randomId = Math.floor(Math.random() * screens.length) + 1;
            if (!chosenIds.has(randomId)) {
                newSequence.push(randomId);
                chosenIds.add(randomId);
            }
        }

        return newSequence;
    };

    const playSequence = (sequence) => {
        setIsPlaying(false);
        sequence.forEach((id, index) => {
            setTimeout(() => {
                activateScreen(id);
                setTimeout(() => {
                    deactivateScreen(id);
                }, LED_DURATION);
            }, index * (LED_DURATION + 300));
        });
        setTimeout(() => {
            setMessage('Repeat the sequence');
            setIsPlaying(true);
            startTimer();
        }, sequence.length * (LED_DURATION + 300));
    };

    const startTimer = () => {
        if (timer) clearInterval(timer);

        setCurrentTime(timeLimit);

        const newTimer = setInterval(() => {
            setCurrentTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(newTimer);
                    setMessage('Time is up'); 
                    setScreens((prevScreens) =>
                        prevScreens.map((screen) => ({ ...screen, active: false }))
                    );
                    setIsPlaying(false);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        setTimer(newTimer);
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
        if (isPlaying) {
            const updatedUserSequence = [...userSequence, id];
            setUserSequence(updatedUserSequence);
            activateScreen(id);

            const currentIndex = updatedUserSequence.length - 1;
            if (sequence[currentIndex] !== id) {
                setMessage('Incorrect. Press "Start Game!" to retry.');
                setScreens((prevScreens) =>
                    prevScreens.map((screen) => ({ ...screen, active: false }))
                );
                setIsPlaying(false);
                return;
            }

            setTimeout(() => {
                deactivateScreen(id);
            }, 500);
        }
    };

    const checkSequence = () => {
        let isCorrect = true;
        if (userSequence.length !== sequence.length) {
            isCorrect = false; 
        } else {
            for (let i = 0; i < sequence.length; i++) {
                if (sequence[i] !== userSequence[i]) {
                    isCorrect = false; 
                    break;
                }
            }
        }

        if (isCorrect) {
            setMessage('Correct!');
            setScore(score + 1);
            setTimeout(() => {
                const newLength = sequence.length + 1;
                const newSequence = generateRandomSequence(newLength);
                setSequence(newSequence);
                setUserSequence([]);
                setIsPlaying(false);
                playSequence(newSequence);
            }, 1000);
        } else {
            setMessage('Incorrect!');
            setScreens((prevScreens) =>
                prevScreens.map((screen) => ({ ...screen, active: false }))
            );
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
            <h1> Extreme Mode</h1>
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
                onClick={() => navigate('/')}>
                Return Home
            </button>

            <button 
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    fontFamily: 'inherit',
                    fontWeight: 'bold',
                }}
                onClick={startGame}>
                Start Game!
            </button>
            <p>{message}</p>
            <p style={{ fontSize: '24px' }}>Time Remaining: {currentTime}s</p>
            <Mesh screens={screens} onScreenClick={handleScreenClick} mode="extreme" isClickable={isPlaying} />
            <p>Score: {score}</p>
            
        </div>
    );
};

export default Extreme;

