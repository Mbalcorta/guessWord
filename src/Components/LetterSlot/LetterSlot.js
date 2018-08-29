import React from 'react';
import PropTypes from 'prop-types';
import './LetterSlot.css';

const LetterSlot = (props) => {
  const {index, foundLetters} = props;
  if(foundLetters[index]){
    return(
      <div className="slotWrapper">
        <p>{foundLetters[index]}</p>
        <span>_________ </span>
      </div>
    );
  } else {
    return(
      <div className="slotWrapper">
        <p></p>
        <span>_________ </span>
      </div>
    );
  }
};

LetterSlot.propTypes = {
  index: PropTypes.number,
  foundLetters: PropTypes.object
};

export default LetterSlot;