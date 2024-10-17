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
    const [score, setScore] = useState(0); // Estado para manejar el puntaje

    const preguntas = preguntasRespuestas[difficulty];

    const handleOptionClick = (id) => {
        if (currentQuestion < preguntas.length) {
            const correctOptionId = preguntas[currentQuestion].correctOptionId;
            setSelectedOption(id);

            setScreens(screens.map(screen => ({ ...screen, color: "grey" })));

            if (id === correctOptionId) {
                setFeedbackMessage('¡Correct!');
                updateScreenColor(id, "green");
                setScore(prevScore => prevScore + 1); // Aumentar el puntaje si es correcto
            } else {
                setFeedbackMessage('Incorrect, try again.');
                updateScreenColor(id, "red");
            }

            setTimeout(() => {
                nextQuestion();
            }, 1000);
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
        setScore(0); // Reiniciar el puntaje al cambiar la dificultad
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
            backgroundImage: 'url("/starr.jpg")',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
            backgroundAttachment: 'fixed', // Prevenir zoom en la imagen de fondo
            minHeight: '100vh',
            color: "white",
            overflow: 'hidden' // Para evitar que haya scroll inesperado o desbordamiento
        }}>
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

            <h4 style={{fontWeight: "100"}}>Select Difficulty:</h4>
            <button onClick={() => changeDifficulty('easy')} style={getButtonStyle('easy')}>Easy</button>
            <button onClick={() => changeDifficulty('medium')} style={getButtonStyle('medium')}>Medium</button>
            <button onClick={() => changeDifficulty('hard')} style={getButtonStyle('hard')}>Hard</button>

            <h2 style={{ marginTop: "2rem", marginBottom:"0", fontStyle: 'italic'}}>Question:</h2>
            <h1>{preguntas[currentQuestion].question}</h1>

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
