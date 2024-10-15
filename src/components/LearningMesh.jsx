import React from "react";
import LearningLedScreen from "./LearningLedScreen";

const LearningMesh = ({ screens, onScreenClick, options }) => {
    return (
        <div style={{
            display: "grid",
            width: "80vw",
            height: "60vh",
            gridTemplateColumns: "repeat(3, 1fr)",  // Distribuir los LED en 3 columnas
            gridTemplateRows: "repeat(2, 1fr)",     // Distribuir los LED en 2 filas
            justifyItems: "center",                 // Centrar cada LED horizontalmente
            alignItems: "center",                   // Centrar cada LED verticalmente
            gap: "3rem",                            // Espaciado entre los LED
            margin: "0 auto"                        // Asegurar que el contenedor esté centrado en la página
        }}>
            {screens.map((screen, index) => (
                <LearningLedScreen
                    key={screen.id}
                    id={screen.id}
                    isActive={screen.active}
                    color={screen.color}            // Pasar el color como prop
                    onClick={onScreenClick}
                    optionText={options[index]?.text || "N/A"}
                />
            ))}
        </div>
    );
};

export default LearningMesh;
