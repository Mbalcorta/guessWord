import React from 'react';
import PlayAgainButton from '../PlayAgainButton/PlayAgainButton.js';
import './GameContinueOrOver.css'

const GameOver = (props) => {
const { header, subHeader, text, func } = props;
 return(
  <div className="gameContWrapper">
    <p>{header}</p>
    <p>{subHeader}</p>
    <PlayAgainButton text={text} restartGame={() => func }/>
  </div>
 )
}

export default GameOver;