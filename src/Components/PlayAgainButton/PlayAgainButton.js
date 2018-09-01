import React from 'react';
import PropTypes from 'prop-types';
import './PlayAgainButton.css';

const PlayAgainButton = (props) => {
  const {onClickFunc, text } = props; 
    return(
      <div className="buttonContainer">
        <button onClick={onClickFunc}>{text}</button>
      </div>
    );
};

PlayAgainButton.propTypes = {
  text: PropTypes.string,
  onClickFunc: PropTypes.func
};

export default PlayAgainButton; 