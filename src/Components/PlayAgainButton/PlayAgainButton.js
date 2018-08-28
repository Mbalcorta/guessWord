import React from 'react';
import PropTypes from "prop-types";

const PlayAgainButton = (props) => {
  return(
    <div>
      <button>{props.text}</button>
    </div>
  );
};

PlayAgainButton.propTypes = {
  text: PropTypes.string
};

export default PlayAgainButton; 