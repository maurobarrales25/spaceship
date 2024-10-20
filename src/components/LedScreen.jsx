import React from "react";

const LedScreen = ({ id, isActive, onClick, mode, color, optionText, isClickable }) => {
    // Aplicamos diferentes estilos según el modo
    const getLedStyle = () => {
        switch (mode) {
            case "learning":
                return {
                    backgroundColor: isActive ? color : "lightgrey", 
                    width: "150px", 
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    border: `3px solid ${isActive ? color : "grey"}`, 
                    borderRadius: "10px", 
                    fontSize: "18px", 
                    color: isActive ? "white" : "black", 
                    transition: "background-color 0.3s ease",
                };
            case "memory":
                return {
                    backgroundColor: isActive ? "#76FF03" : "#F44336",
                    width: "120px",
                    height: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: isClickable ? "pointer" : "default", 
                    opacity: isActive ? 1 : 0.5,
                    border: "2px solid black",
                    borderRadius: "50%", 
                    transition: "opacity 0.3s ease, background-color 0.3s ease", 
                };
            case "reflex":
                return {
                    backgroundColor: isActive ? "#03A9F4" : "darkgrey", 
                    width: "100px",
                    height: "100px",
                    cursor: "pointer",
                    border: "3px solid white",
                    boxShadow: isActive ? "0px 0px 15px 5px #03A9F4" : "none", 
                    borderRadius: "50%",
                    transition: "box-shadow 0.3s ease, background-color 0.3s ease", 
                };
            case "musical":
                return {
                    backgroundColor: isActive ? "#FFD700" : "#B0C4DE",
                    width: "120px",
                    height: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: isClickable ? "pointer" : "default", 
                    opacity: isActive ? 1 : 0.7,
                    border: "2px solid #FFD700",
                    borderRadius: "50%", 
                    transition: "opacity 0.3s ease, background-color 0.3s ease",
                };
                case "extreme":
                    return {
                        backgroundColor: isActive ? "red" : "darkgrey",
                        width: "120px",
                        height: "120px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: isClickable ? "pointer" : "default", 
                        opacity: isActive ? 1 : 0.5,
                        border: "2px solid black",
                        borderRadius: "50%", 
                        transition: "box-shadow 0.3s ease, background-color 0.3s ease", 
                    };
            default:
                return {};
        }
    };

    return (
        <div onClick={onClick} style={getLedStyle()}>
            {mode === "learning" && <span>{optionText}</span>} 
        </div>
    );
};

export default LedScreen;
