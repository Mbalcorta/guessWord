import React from 'react';
import PropTypes from "prop-types";

const PlayAgainButton = (props) => {
  const {restartGame, text, levelUp } = props; 
  if(restartGame){
    return(
      <div>
        <button onClick={restartGame}>{text}</button>
      </div>
    );
  } else {
    return(
      <div>
        <button onClick={levelUp}>{text}</button>
      </div>
    );
  }
  
};

PlayAgainButton.propTypes = {
  text: PropTypes.string,
  restartGame: PropTypes.func
};

export default PlayAgainButton; 