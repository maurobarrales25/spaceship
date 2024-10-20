import { useContext } from "react";
import { GameContext } from "../context/contextGame";

const Header = ({ title, onStart, mode }) => {
    const { updateGame } = useContext(GameContext);

    const handleDifficultyChange = (event) => {
        const value = event.target.value;
        let difficultyValue;

        switch (value) {
            case "easy":
                difficultyValue = 0.7;
                break;
            case "medium":
                difficultyValue = 0.5;
                break;
            case "hard":
                difficultyValue = 0.3;
                break;
            default:
                difficultyValue = 0.7;
                break;
        }

        updateGame({ difficulty: difficultyValue });
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '20px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        fontFamily: 'Orbitron, sans-serif',
        fontWeight: 'bold',
        fontStyle: 'italic',
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "5px",
            width: "100%"
        }}>
            <h1>{title}</h1>
            <p>{title} Playability: Click as fast as you can to test your reflexes!!</p> 
            <button style={buttonStyle} onClick={onStart}>Start Game!</button>

            {mode !== "musical" && (
                <div>
                    <label>Select Difficulty: </label>
                    <select onChange={handleDifficultyChange}
                        style={{
                            backgroundColor: "rgba(151, 191, 209, 0.6)",
                            color: "white",
                            fontFamily: "sans-serif",
                            fontWeight: "550",
                            border: "0",
                            borderRadius: "20px" 
                            }}>
                        <option value="easy">Easy (0.7 seconds)</option>
                        <option value="medium">Medium (0.5 seconds)</option>
                        <option value="hard">Hard (0.3 seconds)</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default Header;

