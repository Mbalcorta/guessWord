import React from 'react';
import PlayAgainButton from '../PlayAgainButton/PlayAgainButton.js';
import './GameContinueOrOver.css'

const GameOver = (props) => {
const { header, subHeader, levelUpText, keepPracticingText, keepPracticingFunc, levelUpFunc} = props;
 return(
  <div className="gameContWrapper">
    <p>{header}</p>
    <p>{subHeader}</p>
    <div className="buttonsContainer">
      <PlayAgainButton text={ keepPracticingText } onClickFunc={ keepPracticingFunc }/>
      <PlayAgainButton text={ levelUpText } onClickFunc={ levelUpFunc }/>
    </div>
  </div>
 )
}

export default GameOver;