import React from 'react';
import PlayAgainButton from '../PlayAgainButton/PlayAgainButton.js';
import './GameContinueOrOver.css';

const GameOver = (props) => {
const { header, subHeader, levelUpText, keepPracticingText, keepPracticingFunc, levelUpFunc, lost, text, restartGame } = props;
let buttons = null;
if(lost){
 buttons = (<PlayAgainButton text={ text } onClickFunc={ restartGame }/>);
} else {
  buttons = (
    <div className="buttonsContainer">
      <PlayAgainButton text={ keepPracticingText } onClickFunc={ keepPracticingFunc }/>
      <PlayAgainButton text={ levelUpText } onClickFunc={ levelUpFunc }/>
    </div>
  );
}

return(
  <div className="gameContWrapper">
    <p>{header}</p>
    <p>{subHeader}</p>
    {buttons}
  </div>
 );
};

export default GameOver;