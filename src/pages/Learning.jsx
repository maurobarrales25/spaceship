import React, { useState } from 'react';
import LearningMesh from '../components/LearningMesh';

const Learning = () => {
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
    const [difficulty, setDifficulty] = useState('easy'); // Estado para la dificultad

    // Preguntas por nivel de dificultad con 6 opciones cada una
    const questions = {
        easy: [
            {
                question: '¿Cuál es la capital de Francia?',
                options: [
                    { id: 1, text: 'París' },
                    { id: 2, text: 'Londres' },
                    { id: 3, text: 'Madrid' },
                    { id: 4, text: 'Roma' },
                    { id: 5, text: 'Berlín' },
                    { id: 6, text: 'Bruselas' }
                ],
                correctOptionId: 1
            },
            {
                question: '¿Cuál es el planeta más grande del sistema solar?',
                options: [
                    { id: 1, text: 'Marte' },
                    { id: 2, text: 'Júpiter' },
                    { id: 3, text: 'Saturno' },
                    { id: 4, text: 'Neptuno' },
                    { id: 5, text: 'Urano' },
                    { id: 6, text: 'Venus' }
                ],
                correctOptionId: 2
            }
        ],
        medium: [
            {
                question: '¿En qué año llegó el hombre a la Luna?',
                options: [
                    { id: 1, text: '1965' },
                    { id: 2, text: '1969' },
                    { id: 3, text: '1972' },
                    { id: 4, text: '1980' },
                    { id: 5, text: '1970' },
                    { id: 6, text: '1975' }
                ],
                correctOptionId: 2
            },
            {
                question: '¿Cuál es la fórmula del agua?',
                options: [
                    { id: 1, text: 'CO2' },
                    { id: 2, text: 'H2O' },
                    { id: 3, text: 'O2' },
                    { id: 4, text: 'NaCl' },
                    { id: 5, text: 'CH4' },
                    { id: 6, text: 'HCl' }
                ],
                correctOptionId: 2
            }
        ],
        hard: [
            {
                question: '¿Quién desarrolló la teoría de la relatividad?',
                options: [
                    { id: 1, text: 'Isaac Newton' },
                    { id: 2, text: 'Galileo Galilei' },
                    { id: 3, text: 'Albert Einstein' },
                    { id: 4, text: 'Nikola Tesla' },
                    { id: 5, text: 'Stephen Hawking' },
                    { id: 6, text: 'Max Planck' }
                ],
                correctOptionId: 3
            },
            {
                question: '¿Qué partícula subatómica tiene carga negativa?',
                options: [
                    { id: 1, text: 'Protones' },
                    { id: 2, text: 'Neutrones' },
                    { id: 3, text: 'Electrones' },
                    { id: 4, text: 'Fotones' },
                    { id: 5, text: 'Quarks' },
                    { id: 6, text: 'Gluones' }
                ],
                correctOptionId: 3
            }
        ]
    };

    // Manejar el clic en una opción de LED
    const handleOptionClick = (id) => {
        const currentQuestions = questions[difficulty];
        
        // Verificar que currentQuestion esté dentro de los límites del arreglo
        if (currentQuestion < currentQuestions.length) {
            const correctOptionId = currentQuestions[currentQuestion].correctOptionId;
            setSelectedOption(id);

            if (id === correctOptionId) {
                setFeedbackMessage('¡Correcto!');
                updateScreenColor(id, "green"); // Cambiar color a verde
            } else {
                setFeedbackMessage('Incorrecto, intenta de nuevo.');
                updateScreenColor(id, "red"); // Cambiar color a rojo
            }

            // Esperar un breve tiempo y luego pasar a la siguiente pregunta
            setTimeout(() => {
                nextQuestion();
            }, 1000);
        }
    };

    // Cambiar el color del LED
    const updateScreenColor = (id, color) => {
        setScreens(screens.map(screen => ({
            ...screen,
            color: screen.id === id ? color : screen.color
        })));
    };

    // Cambiar a la siguiente pregunta
    const nextQuestion = () => {
        const currentQuestions = questions[difficulty];

        // Asegurarnos de que el índice no exceda la cantidad de preguntas
        if (currentQuestion + 1 < currentQuestions.length) {
            setCurrentQuestion((prev) => prev + 1);  // Siguiente pregunta
        } else {
            setCurrentQuestion(0);  // Reiniciar a la primera pregunta si ya terminó
        }
        setFeedbackMessage('');
        setSelectedOption(null);

        // Restablecer el color de los LEDs a gris
        setScreens(screens.map(screen => ({ ...screen, active: false, color: "grey" })));
    };

    // Cambiar la dificultad
    const changeDifficulty = (level) => {
        setDifficulty(level);
        setCurrentQuestion(0);  // Reiniciar las preguntas
        setFeedbackMessage('');  // Limpiar el mensaje de feedback
        setScreens(screens.map(screen => ({ ...screen, active: false, color: "grey" })));  // Reiniciar los LEDs
    };

    // Estilo para los botones de dificultad
    const getButtonStyle = (level) => {
        return {
            margin: '5px',
            backgroundColor: difficulty === level ? '#4caf50' : '#f0f0f0', // Resaltar el botón seleccionado
            color: difficulty === level ? 'white' : 'black',
            border: difficulty === level ? '2px solid #4caf50' : '2px solid #ccc',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer'
        };
    };

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1>Selecciona la dificultad:</h1>
                <button onClick={() => changeDifficulty('easy')} style={getButtonStyle('easy')}>Fácil</button>
                <button onClick={() => changeDifficulty('medium')} style={getButtonStyle('medium')}>Medio</button>
                <button onClick={() => changeDifficulty('hard')} style={getButtonStyle('hard')}>Difícil</button>
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1>Pregunta:</h1>
                <h2>{questions[difficulty][currentQuestion].question}</h2>
            </div>
            <LearningMesh 
                screens={screens} 
                onScreenClick={handleOptionClick} 
                options={questions[difficulty][currentQuestion].options}
            />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p>{feedbackMessage}</p>
            </div>
        </div>
    );
};

export default Learning;
