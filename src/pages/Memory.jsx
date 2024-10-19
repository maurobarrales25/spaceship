import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';
import Header from '../components/Header';
import { GameContext } from '../context/contextGame';

const Memory = () => {
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
    const [userSequence, setUserSequence] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [message, setMessage] = useState('Press "Start Game!" to begin the game');
    const [score, setScore] = useState(0);
    game.difficulty = 0.7;

    useEffect(() => {
        if (isPlaying && userSequence.length === sequence.length) {
            checkSequence();
        }
    }, [userSequence]);

    const startGame = () => {
        setMessage('Memorize the sequence');
        const newSequence = generateSequence(1);
        setSequence(newSequence);
        setUserSequence([]);
        setScore(0);
        setIsPlaying(false);
        playSequence(newSequence);
    };

    const generateSequence = (length) => {
        const newSequence = [];
        for (let i = 0; i < length; i++) {
            const randomId = Math.floor(Math.random() * screens.length) + 1;
            newSequence.push(randomId);
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
                }, game.difficulty * 1000);
            }, index * (game.difficulty * 1000 + 300));
        });
        setTimeout(() => {
            setMessage('Repeat the sequence');
            setIsPlaying(true);
        }, sequence.length * (game.difficulty * 1000 + 300));
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
        if (JSON.stringify(sequence) === JSON.stringify(userSequence)) {
            setMessage('Correct! Get ready for the next round');
            setScore(score + 1);
            setTimeout(() => {
                const newSequence = [...sequence, ...generateSequence(1)];
                setSequence(newSequence);
                setUserSequence([]);
                setIsPlaying(false);
                playSequence(newSequence);
            }, 1000);
        } else {
            setMessage('Incorrect. Press "Start Game!" to try again');
            setScreens((prevScreens) =>
                prevScreens.map((screen) => ({ ...screen, active: false }))
            );
            setIsPlaying(false);
        }
    };


    return (
        <div style={{ 
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center", 
            textAlign: "center", 
            backgroundImage: 'url("/Photos/starr.jpg")',
            backgroundSize: "cover", 
            backgroundPosition: "center",
            height: "100vh", 
            color: "white", 
        }}>
            {/* Botón para volver al inicio  */}
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

            <Header 
                title="Memory Game" 
                onStart={startGame} 
            />
            <p>{message}</p>
            
            <Mesh screens={screens} onScreenClick={handleScreenClick} mode="memory" isClickable={isPlaying} />
            <p>Score: {score}</p>
        </div>
    );
};

export default Memory;