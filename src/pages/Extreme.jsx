import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Mesh from '../components/Mesh';
import Header from '../components/Header';

const Extreme = () => {
    const navigate= useNavigate();
    const [screens, setScreens] = useState(
        Array.from({ length: 6 }, (_, index) => ({
            id: index + 1,
            active: false,
        }))
    );

    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(5);
    const [sequenceLength, setSequenceLength] = useState(3);
    const [activeScreens, setActiveScreens] = useState([]);
    const [selectedScreens, setSelectedScreens] = useState([]);
    const [startTime, setStartTime] = useState(null);
    //const [score, setScore] = useState(0);


    const StartGame = () => {
        setGameStarted(true);
        setTimer(5);
        setSequenceLength(3);
        setSelectedScreens([]);
        activateRandomScreens(3);
    };


    useEffect(() => {
        let interval;
        if (gameStarted && timer >0) {
            interval= setInterval(() =>{
                setTimer((prevTimer) => prevTimer-1);
            },1000);
        } else if(timer === 0){
            setGameStarted(false);
            setActiveScreens([]);
        }
        return () => clearInterval(interval);
    }, [gameStarted,timer]);


    const activateRandomScreens= (length) => {
        const randomScreens= [];
        while(randomScreens.length < length){
            const randomIndex= Math.floor(Math.random() * screens.length);
            if (!randomScreens.includes(randomIndex)) {
                randomScreens.push(randomIndex);
        }
    }
    const newScreens = screens.map((screen, index) => ({
        ...screens,
        active: randomScreens.includes(index),
        //color:??
    }));
    setScreens(newScreens); // re renderizo el nuevo estado de los leds.
    setActiveScreens(randomScreens); // guardo leds activos.
    setStartTime(Date.now()); // reinicio tiempo
    };


    const handleClick = (id) => {
        if (!gameStarted) return;

        const clickedScreen = screens.find((screen) => screen.id === id);

        if (clickedScreen.active && !selectedScreens.includes(id)) {
            setSelectedScreens([...selectedScreens, id]);

            if (selectedScreens.length + 1 === sequenceLength) {
                const newLength = sequenceLength + 1;
                const newTime = timer + 2;

                setTimeout(() => {
                    setSequenceLength(newLength);
                    setTimer(newTime);
                    setSelectedScreens([]);
                    activateRandomScreens(newLength);
                }, 500);
            }
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
        
        <Mesh
                screens={screens}
                onScreenClick={handleClick}
                mode="extreme"
                isClickable={true}
        />
     

    </div>
    );
    };


export default Extreme;