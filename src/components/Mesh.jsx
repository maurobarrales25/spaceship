import React from "react";
import LedScreen from "./LedScreen"; // Importamos el componente unificado

const CombinedMesh = ({ screens, onScreenClick, mode, isClickable, options }) => {
    // Dependiendo del modo, renderizamos LedScreen con las propiedades adecuadas
    const renderLedScreen = (screen, index) => {
        return (
            <LedScreen
                key={screen.id}
                id={screen.id}
                isActive={screen.active}
                onClick={() => onScreenClick(screen.id)}
                mode={mode} 
                color={screen.color} 
                optionText={options ? options[index]?.text : null} 
                isClickable={isClickable} 
            />
        );
    };
                                    
    return (
        <div
            style={{
                display: "grid",
                width: "80vw",
                height: "60vh",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                justifyItems: "center",
                alignItems: "center",
                gap: "3rem",
                margin: "0 auto",
            }}
        >
            {screens.map((screen, index) => renderLedScreen(screen, index))}
        </div>
    );
};

export default CombinedMesh;
