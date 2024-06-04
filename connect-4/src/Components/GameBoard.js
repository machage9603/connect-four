import React, { useState } from 'react';
import './Game.css';
import Footer from './Footer';
import Header from './Header';
import GameCircle from './GameCircle';
import {isWinner} from '../helper';

import { 
    GAME_STATE_PLAYING, 
    GAME_STATE_WIN,
    NO_PLAYER, 
    PLAYER_1, 
    PLAYER_2,
    NO_CIRCLES,
} from '../constants.js';

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

    console.log(gameBoard);

    const initialBoard = () => {
        const circles = [];
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }
    
    const circleClicked = (id) => {
        console.log('circle clicked' + id);
        
        if (gameBoard[id] !== NO_PLAYER) return;
        // TODO: check for winner
        if (gameState !== GAME_STATE_PLAYING) return;

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        setGameBoard(prev =>{
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

        console.log(gameBoard);
        console.log(currentPlayer);
    }

    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`	} onCircleClicked={circleClicked}/>
    }
    return (
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
        <div className="gameBoard" >
            {initialBoard()}        
        </div>
        <Footer />
        </>
    )
}

export default GameBoard;