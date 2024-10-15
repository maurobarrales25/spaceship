import React, { useState, useEffect } from "react";

const LearningLedScreen = ({ id, isActive, onClick, optionText, color }) => {
    const [active, setActive] = useState(isActive);

    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const handleClick = () => {
        if (active) {
            setActive(false);
        }
        onClick(id);
    };

    return (
        <div 
            onClick={handleClick}
            style={{
                width: "7rem",
                height: "7rem",
                backgroundColor: color,                         // Aplicar el color recibido como prop
                display: "flex",                                // Usar Flexbox para alinear el texto dentro del LED
                justifyContent: "center",                       // Centrar horizontalmente
                alignItems: "center",                           // Centrar verticalmente
                cursor: active ? "pointer" : "default",
                border: "3px solid black",
                borderRadius: "10px",
                textAlign: "center"
            }}
        >
            <span style={{ color: "white", fontWeight: "bold" }}>{optionText}</span>
        </div>
    );
};

export default LearningLedScreen;
