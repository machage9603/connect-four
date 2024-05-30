import React, { useState } from 'react';
import './Game.css';
import GameCircle from './GameCircle';

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(0));
    const circleClicked = (id) => {
        debugger;
        console.log('circle clicked' + id);

        gameBoard[id] = 1;
        setGameBoard(gameBoard);

        console.log(gameBoard);
    }

    return (
        <div className="gameBoard" >
            <GameCircle id="1"  className="player_1" onCircleClicked={circleClicked}>
             
            </GameCircle>
            <GameCircle id="2" >
            
            </GameCircle>
            <GameCircle id="3" >
        
            </GameCircle>
            <GameCircle id="4" >
            
            </GameCircle>
            <GameCircle id="5" color='ed'>
        
            </GameCircle>
            <GameCircle id="6" >
            
            </GameCircle>
            <GameCircle id="7" >
        
            </GameCircle>
            <GameCircle id="8" >
            
            </GameCircle>
            <GameCircle id="1" >
             
            </GameCircle>
            <GameCircle id="2" >
            
            </GameCircle>
            <GameCircle id="3" >
        
            </GameCircle>
            <GameCircle id="4" >
            
            </GameCircle>
            <GameCircle id="5" >
        
            </GameCircle>
            <GameCircle id="6" >
            
            </GameCircle>
            <GameCircle id="7" >
        
            </GameCircle>
            <GameCircle id="8" >
            
            </GameCircle>
            
        </div>
    )
}

export default GameBoard;