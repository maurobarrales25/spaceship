import React from "react";
import MemoryLedScreen from "./MemoryLedScreen";

const MemoryMesh = ({ screens, onScreenClick, isClickable  }) => {
    return (
        <div style={{
            display: "grid",
            width: "80vw",
            height: "60vh",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            justifyItems: "center",
            alignItems: "center",
            gap: "3rem"
        }}>
            {screens.map(screen => (
                <MemoryLedScreen
                    key={screen.id}
                    id={screen.id}
                    isActive={screen.active}
                    onClick={onScreenClick}
                    isClickable={isClickable}
                />
            ))}
        </div>
    );
};

export default MemoryMesh;