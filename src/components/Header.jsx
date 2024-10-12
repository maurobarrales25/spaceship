
const Header = ({ title, onStart, onDifficultyChange }) => {

    const handleDifficultyChange = (event) => {
        const value = event.target.value;
        let difficultyValue;

        if (value === "easy"){
            difficultyValue = 0.7;
        } else if (value === "medium"){
            difficultyValue = 0.5;
        }else {
            difficultyValue = 0.3
        }

        onDifficultyChange(difficultyValue);
    }

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
        fontStyle: 'italic'
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
            <button style={buttonStyle} onClick={onStart}>Start Game!</button>
            <div>
                <label>Select Difficulty: </label>
                <select onChange={handleDifficultyChange}>
                    <option value="easy">Easy (0.7 seconds)</option>
                    <option value="medium">Medium (0.5 seconds)</option>
                    <option value="hard">Hard (0.3 seconds)</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
