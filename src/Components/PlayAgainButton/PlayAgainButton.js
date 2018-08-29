import React from 'react';
import PropTypes from "prop-types";

const PlayAgainButton = (props) => {
  const {onClickFunc, text } = props; 
    return(
      <div>
        <button onClick={onClickFunc}>{text}</button>
      </div>
    );
};

PlayAgainButton.propTypes = {
  text: PropTypes.string,
  onClickFunc: PropTypes.func
};

export default PlayAgainButton; 