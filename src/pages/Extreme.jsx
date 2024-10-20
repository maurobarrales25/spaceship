import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';
import Header from '../components/Header';
import { GameContext } from '../context/contextGame';

const Extreme = () => {
    const navigate= useNavigate();
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
    //const [timer, setTimer] = useState(0); 
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    











    
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
        </div>
    )
    }




    export default Extreme;
