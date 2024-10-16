import React from "react";
import ReflexLedScreen from "./ReflexLedScreen";

const ReflexMesh = ({ screens, onScreenClick }) => {
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
            {screens.map((screen) => (
                <ReflexLedScreen
                    key={screen.id}
                    id={screen.id}
                    isActive={screen.active}
                    onClick={() => onScreenClick(screen.id)} 
                />
            ))}
        </div>
    );
};

export default ReflexMesh;
