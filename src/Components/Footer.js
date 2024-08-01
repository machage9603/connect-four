import React from 'react';

import {
  GAME_STATE_PLAYING,
 } from '../constants.js';

const Footer = ({onClickEvent, gameState}) => {
  return (
    <div className="panel footer">
      {
        gameState !== GAME_STATE_PLAYING && <button onClick={onClickEvent}>New Game</button>
      }
    </div>
  );
};

export default Footer;