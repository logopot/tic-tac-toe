import React from 'react';
import Game from '../Components/Game/Game';




const GamePage = () => {
    return (
        <div className="App">
            <div className = "container text-center pt-5">
                <h1>Welcome</h1>
                <Game />
            </div>
        </div>
    )
}

export default GamePage;