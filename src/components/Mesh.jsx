import React from "react";
import LedScreen from "./LedScreen";

const Mesh = ({ screens, onScreenClick }) => {
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
                <LedScreen
                    key={screen.id}
                    id={screen.id}
                    isActive={screen.active}
                    onClick={() => onScreenClick(screen.id)} 
                />
            ))}
        </div>
    );
};

export default Mesh;
