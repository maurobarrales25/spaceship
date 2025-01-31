import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';

const GameDesc = () => {
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);

    const animationProps = useSpring({
        opacity: isAnimating ? 1 : 0,
        config: { duration: 1000 }
    });

    const handleGoBack = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate("/");
        }, 1000); 
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            backgroundImage: 'url("/Photos/homeimg.jpg")', 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            position: "relative" 
        }}>
            <button
                onClick={handleGoBack}
                style={{
                    position: 'absolute',
                    top: '25px',
                    left: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#8c8c8c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    borderBottom: "3px solid #6b6b6b",
                    borderLeft: "3px solid #6b6b6b"
                }}
            >
                Return Home
            </button>

            {isAnimating && (
                <animated.div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '24px',
                    ...animationProps
                }}>
                    Loading...
                </animated.div>
            )}

            <div style={{ 
                backgroundColor: "rgba(0, 0, 0, 0.7)", 
                padding: "40px", 
                borderRadius: "10px", 
                textAlign: "center",
                color: "white",
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                <h1>Game Descriptions</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                }}>
                    <div style={{ width: '30%', paddingRight:'20px'}}>
                        <h3 style={{textDecoration:"underline"}}>Reflex:</h3>
                        <p>This mode challenges the player's reaction time. Players must press the LED devices 
                            as quickly as possible when they light up. In competitive mode, astronauts race to 
                            see who can press the lights first, testing their reflexes and speed under 
                            microgravity conditions.</p>
                    </div>
                    <div style={{ width: '30%', paddingRight:'20px'}}>
                        <h3 style={{textDecoration:"underline"}}>Memory:</h3>
                        <p>In this mode, a sequence of LEDs lights up, and the player must recall and press them 
                            in the correct order. This mode focuses on enhancing cognitive functions by 
                            challenging short-term memory and concentration.</p>
                    </div>
                    <div style={{ width: '30%', paddingRight:'20px'}}>
                        <h3 style={{textDecoration:"underline"}}>Learning:</h3>
                        <p>Players are presented with multiple-choice questions on a tablet, with each LED 
                            corresponding to an answer. The player must select the correct answer by pressing the
                            associated LED, integrating cognitive learning with physical interaction.</p>
                    </div>
                    <div style={{ width: '30%', paddingRight:'20px' }}>
                        <h3 style={{textDecoration:"underline"}}>Musical:</h3>
                        <p>This game mode equires the player to follow the rhythm of a song by pressing LED
                            devices at precise moments. The song is displayed on a tablet, and if the player
                            fails to press the device on time or incorrectly, the sound will distort or mute.
                            The difficulty increases based on the selected speed, and the player must maintain
                            the correct rhythm to ensure the music continues without interruptions.</p>
                    </div>
                    <div style={{ width: '30%' }}>
                        <h3 style={{textDecoration:"underline"}}>Extreme:</h3>
                        <p>In this game mode, players must accurately follow a displayed sequence by clicking 
                            on circular targets in the correct order. After the sequence is shown, a timer starts, 
                            giving the player exactly 3 seconds to press the targets in the correct sequence before 
                            time runs out.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDesc;
