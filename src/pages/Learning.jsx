import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';
import preguntasRespuestas from '../Data/questions'; 
import { useSpring, animated } from '@react-spring/web';
import dataService from '../services/dataService';
import { useUser } from '../context/userContext';

const Learning = () => {

    const { username } = useUser();
    console.log("USERNAME learning: ",username);
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

    const [screens, setScreens] = useState([
        { id: 1, active: false, color: "grey" },
        { id: 2, active: false, color: "grey" },
        { id: 3, active: false, color: "grey" },
        { id: 4, active: false, color: "grey" },
        { id: 5, active: false, color: "grey" },
        { id: 6, active: false, color: "grey" },
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [difficulty, setDifficulty] = useState('easy'); 
    const [score, setScore] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const preguntas = preguntasRespuestas[difficulty];

    const submitScore = async () => {
        try {
            await dataService.sendScore('learing', score, username);
            console.log('Score sent successfully');
        } catch (error) {
            console.error('Error sending score:', error);
        }
    };

    const resetGame = () => {
        submitScore();
        setCurrentQuestion(0);
        setSelectedOption(null);
        setFeedbackMessage('');
        setScore(0);
        setScreens(screens.map(screen => ({ ...screen, color: "grey" })));
    };

    const handleOptionClick = (id) => {
        if (isDisabled) {
            return;
        }
    
        setIsDisabled(true);
    
        if (currentQuestion < preguntas.length) {
            const correctOptionId = preguntas[currentQuestion].correctOptionId;
            setSelectedOption(id);
    
            setScreens(screens.map(screen => ({ ...screen, color: "grey" })));
    
            if (id === correctOptionId) {
                setFeedbackMessage('¡Correct!');
                updateScreenColor(id, "green");
                setScore(prevScore => prevScore + 1);
            } else {
                setFeedbackMessage('Incorrect, the correct answer will be highlighted.');
                updateScreenColor(id, "red");
    
                setTimeout(() => {
                    updateScreenColor(correctOptionId, "grey");
                }, 800);
            }
    
            setTimeout(() => {
                nextQuestion();
                setIsDisabled(false);
            }, 2500);
        }
    };
    
    
    

    const updateScreenColor = (id, color) => {
        setScreens(prevScreens =>
            prevScreens.map(screen => ({
                ...screen,
                active: screen.id === id ? true : screen.active,
                color: screen.id === id ? color : screen.color 
            }))
        );
    };

    const nextQuestion = () => {
        if (currentQuestion + 1< preguntas.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setFeedbackMessage('');
        } else {
            setFeedbackMessage('Game Over');
            submitScore();
            setTimeout(() => {
                resetGame();
                setIsDisabled(false);
            }, 1000);
        }
        setScreens(screens.map(screen => ({ ...screen, active: false, color: "grey" })));
        
    };

    const changeDifficulty = (level) => {
        
        submitScore();
        setDifficulty(level);
        setCurrentQuestion(0);
        setFeedbackMessage('');
        setScore(0);
        setScreens(screens.map(screen => ({ ...screen, active: false, color: "grey" })));
    };

    const getButtonStyle = (level) => {
        return {
            margin: '5px',
            backgroundColor: difficulty === level ? 'rgba(75, 142, 214, 0.7)' : 'rgba(194, 216, 240)',
            color: difficulty === level ? 'white' : 'black',
            border: difficulty === level ? '2px solid #4caf50' : '2px solid #ccc',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontFamily: "sans-serif", 
            fontWeight: "550", 
            border:"0", 
            borderRadius:"20px"
        };
    };

    return (
        <div style={{ 
            textAlign: 'center', 
            margin: '0', 
            padding: '0', 
            backgroundImage: 'url("/Photos/starr.jpg")',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed', 
            minHeight: '100vh',
            color: "white",
            overflow: 'hidden' 
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
                onClick={() => handleGoBack()}
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

            <h4 style={{fontWeight: "100"}}>Select Difficulty:</h4>
            <button onClick={() => changeDifficulty('easy')} style={getButtonStyle('easy')}>Easy</button>
            <button onClick={() => changeDifficulty('medium')} style={getButtonStyle('medium')}>Medium</button>
            <button onClick={() => changeDifficulty('hard')} style={getButtonStyle('hard')}>Hard</button>

            <h2 style={{ marginTop: "1rem", marginBottom:"0", fontStyle: 'italic'}}>Question:</h2>
            <h1>{preguntas[currentQuestion].question}</h1>
            
            <p style={{ marginTop: "0rem", marginBottom: "0", fontSize: "0.9rem", fontWeight: "400"}}>If you get it wrong, the correct one will show itself.</p> 

            <Mesh 
                screens={screens} 
                onScreenClick={handleOptionClick} 
                mode="learning"
                options={preguntas[currentQuestion].options}
            />

            {/* Mostrar el mensaje debajo de la pregunta */}
            <p style={{ marginTop: "0rem", marginBottom: "0", fontSize: "1.2rem", fontWeight: "550"}}>{feedbackMessage}</p> 
            {/* Mostrar el puntaje */}
            <p style={{marginTop: "0"}}>Score: {score}</p>
        </div>
    );
};

export default Learning;
