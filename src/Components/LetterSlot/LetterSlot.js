import React from 'react';

const LetterSlot = (props) => {
  const {index, foundLetters} = props;
  if(foundLetters[index]){
    return(
      <span>{foundLetters[index]}</span>
    );
  } else {
    return(
      <span>_________ </span>
    );
  }
};

export default LetterSlot;