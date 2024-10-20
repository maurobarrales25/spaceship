import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';
import Header from '../components/Header';
import { GameContext } from '../context/contextGame';

const Extreme = () => {
    const navigate= useNavigate();
    const [leds, setLeds] = useState(
        Array.from({ length: 6 }, (_, index) => ({
            id: index + 1,
            active: false,
        }))
    );

    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(5); 
    const [sequenceLength, setSequenceLength] = useState(3);
    const [activeLeds, setActiveLeds] = useState([]); 
    const [selectedLeds, setSelectedLeds] = useState([]);
    //const [score, setScore] = useState(0);

    const StartGame = () => {
        setGameStarted(true);
        setTimer(5);
        setSequenceLength(3);
        setSelectedLeds([]);
        activateRandomLeds(3);
    };

    useEffect(() => {
        let interval;
        if (gameStarted && timer >0) {
            interval= setInterval(() =>{
                setTimer((prevTimer) => prevTimer-1);
            },1000);
        } else if(timer ==0){
            setGameStarted(false);
            setActiveLeds([]);
        }
        return () => clearInterval(interval);
    }, [gameStarted,timer]);

    const activateRandomLeds= (length) => {
        const randomLeds= [];
        while(randomLeds.length < length){
            const randomIndex= Math.floor(Math.random() * leds.length);
            if (!randomLeds.includes(randomIndex)) {
                randomLeds.push(randomIndex);
        }
    }
    const newLeds = leds.map((led, index) => ({
        ...led,
        active: randomLeds.includes(index),
    }));
    setLeds(newLeds); // re renderizo el nuevo estado de los leds.
    setActiveLeds(randomLeds); // guardo leds activos.
    setStartTime(Date.now()); // reinicio tiempo

    const handleClick= (id) => {
        if(!gameStarted) return;

        const clickedLed= leds.find((led) => led.id === id);

        if (clickedLed.Active && !selectedLeds.includes(id)) {
            setSelectedLeds([...selectedLeds,id]);
        }
    }




}














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
