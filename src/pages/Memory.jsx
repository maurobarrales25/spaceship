import React, { useState, useEffect } from 'react';
import MemoryMesh from '../components/MemoryMesh';
import Header from '../components/Header';

const Memory = () => {
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
    const [difficulty, setDifficulty] = useState(700); // Default to easy
    const [score, setScore] = useState(0); // Estado para el puntaje

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
        setScore(0); // Reiniciar el puntaje al iniciar el juego
        setIsPlaying(false); // Desactivar clics durante la reproducción de la secuencia
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
        setIsPlaying(false); // Desactivar clics durante la reproducción de la secuencia
        sequence.forEach((id, index) => {
            setTimeout(() => {
                activateScreen(id);
                setTimeout(() => {
                    deactivateScreen(id);
                }, difficulty);
            }, index * (difficulty + 300));
        });
        setTimeout(() => {
            setMessage('Repeat the sequence');
            setIsPlaying(true); // Permitir clics en los LEDs
        }, sequence.length * (difficulty + 300));
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
            setUserSequence([...userSequence, id]);
            activateScreen(id);
            setTimeout(() => {
                deactivateScreen(id);
            }, 500);
        }
    };

    const checkSequence = () => {
        if (JSON.stringify(sequence) === JSON.stringify(userSequence)) {
            setMessage('Correct! Get ready for the next round');
            setScore(score + 1); // Incrementar el puntaje
            setTimeout(() => {
                const newSequence = [...sequence, ...generateSequence(1)];
                setSequence(newSequence);
                setUserSequence([]);
                setIsPlaying(false); // Desactivar clics durante la reproducción de la secuencia
                playSequence(newSequence);
            }, 1000);
        } else {
            setMessage('Incorrect. Press "Start Game!" to try again');
            setScreens((prevScreens) =>
                prevScreens.map((screen) => ({ ...screen, active: false }))
            ); // Reiniciar todos los LEDs
            setIsPlaying(false);
        }
    };

    const handleDifficultyChange = (newDifficulty) => {
        setDifficulty(newDifficulty);
    };

    return (
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign: "center",  }}>
            <Header 
                title="Memory Game" 
                onStart={startGame} 
                onDifficultyChange={handleDifficultyChange} 
            />
            <p>{message}</p>
            
            <MemoryMesh screens={screens} onScreenClick={handleScreenClick} isClickable={isPlaying} />
            <p>Score: {score}</p>
        </div>
    );
};

export default Memory;