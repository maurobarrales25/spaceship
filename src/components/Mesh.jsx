import React from "react";
import ReflexLedScreen from "./ReflexLedScreen";
import MemoryLedScreen from "./MemoryLedScreen";
import LearningLedScreen from "./LearningLedScreen";

const CombinedMesh = ({ screens, onScreenClick, mode, isClickable, options }) => {
    // Dependiendo del modo, elegimos qué LED screen renderizar
    const renderLedScreen = (screen, index) => {
        switch (mode) {
            case "reflex":
                return (
                    <ReflexLedScreen
                        key={screen.id}
                        id={screen.id}
                        isActive={screen.active}
                        onClick={() => onScreenClick(screen.id)}
                    />
                );
            case "memory":
                return (
                    <MemoryLedScreen
                        key={screen.id}
                        id={screen.id}
                        isActive={screen.active}
                        onClick={onScreenClick}
                        isClickable={isClickable}
                    />
                );
            case "learning":
                return (
                    <LearningLedScreen
                        key={screen.id}
                        id={screen.id}
                        isActive={screen.active}
                        color={screen.color}
                        onClick={onScreenClick}
                        optionText={options[index]?.text || "N/A"}
                    />
                );
            default:
                return null;
        }
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
