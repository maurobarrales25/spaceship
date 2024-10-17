import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';
import preguntasRespuestas from '../Data/questions'; 

const Learning = () => {
    const navigate = useNavigate(); 
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

    // Usa preguntasRespuestas en lugar de questions
    const preguntas = preguntasRespuestas[difficulty];

    const handleOptionClick = (id) => {
        if (currentQuestion < preguntas.length) {
            const correctOptionId = preguntas[currentQuestion].correctOptionId;
            setSelectedOption(id);

            if (id === correctOptionId) {
                setFeedbackMessage('¡Correcto!');
                updateScreenColor(id, "green");
            } else {
                setFeedbackMessage('Incorrecto, intenta de nuevo.');
                updateScreenColor(id, "red");
            }

            setTimeout(() => {
                nextQuestion();
            }, 1000);
        }
    };

    const updateScreenColor = (id, color) => {
        setScreens(screens.map(screen => ({
            ...screen,
            isActive: screen.id === id ? true : screen.isActive,
            color: screen.id === id ? color : screen.color 
        })));
    };
    

    const nextQuestion = () => {
        if (currentQuestion + 1 < preguntas.length) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setCurrentQuestion(0);
        }
        setFeedbackMessage('');
        setSelectedOption(null);

        setScreens(screens.map(screen => ({ ...screen, active: false, color: "grey" })));
    };

    const changeDifficulty = (level) => {
        setDifficulty(level);
        setCurrentQuestion(0);
        setFeedbackMessage('');
        setScreens(screens.map(screen => ({ ...screen, active: false, color: "grey" })));
    };

    const getButtonStyle = (level) => {
        return {
            margin: '5px',
            backgroundColor: difficulty === level ? '#4caf50' : '#f0f0f0',
            color: difficulty === level ? 'white' : 'black',
            border: difficulty === level ? '2px solid #4caf50' : '2px solid #ccc',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
        };
    };

    return (
        <div style={{ 
            textAlign: 'center', 
            margin: '0', 
            padding: '0', 
            backgroundImage: 'url("/starr.jpg")',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            minHeight: '100vh',
            color: "white",
            overflow: 'hidden'
        }}>
            <button 
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#FF5733',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/')}
            >
                Volver a Inicio
            </button>

            <h1>Selecciona la dificultad:</h1>
            <button onClick={() => changeDifficulty('easy')} style={getButtonStyle('easy')}>Fácil</button>
            <button onClick={() => changeDifficulty('medium')} style={getButtonStyle('medium')}>Medio</button>
            <button onClick={() => changeDifficulty('hard')} style={getButtonStyle('hard')}>Difícil</button>
    
            <h1 style={{ marginTop: '2rem' }}>Pregunta:</h1>
            <h2>{preguntas[currentQuestion].question}</h2>
            <Mesh 
                screens={screens} 
                onScreenClick={handleOptionClick} 
                mode="learning"
                options={preguntas[currentQuestion].options}
            />
    
            <p style={{ marginTop: '2rem' }}>{feedbackMessage}</p>
        </div>
    );
};

export default Learning;