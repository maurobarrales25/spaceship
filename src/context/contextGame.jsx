import {createContext, useEffect, useState} from "react";

export const GameContext = createContext();

const GameProvider = ({children})=>{
    const [game, setGame] = useState ({
        player:"",
        mode:"",
        difficulty: "easy"
    });

    const updateGame = (newData) => {
        setGame((prevGame)=> ({
            ...prevGame,
            ...newData
        }));
    };

    useEffect(() => {
        console.log("Cambio de dificultad")
    }, [game]);

    return (
        <GameContext.Provider value={{ game, updateGame}}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;


