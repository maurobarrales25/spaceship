import React from "react";
import { useState, useEffect } from "react";
import soundLedScreen from "../assets/soundLedScreen.mp3";

const MemoryLedScreen = ({ id, isActive, onClick }) => {
    const [active, setActive] = useState(isActive);
    const audio = new Audio(soundLedScreen);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const handleClick = () => {
        if (!active) {
            setActive(true);
            audio.play();
            onClick(id);
        }
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: "7rem",
                height: "7rem",
                backgroundColor: active ? "#17d3f0" : "grey",
                display: "inline-block",
                cursor: "pointer",
                border: "3px solid black",
                borderRadius: "10px"
            }}
        >
        </div>
    );
};

export default MemoryLedScreen;