import React from 'react';
import PropTypes from 'prop-types';
import LetterSlot from '../LetterSlot/LetterSlot.js';

const LettersPlaceHolder = (props) => {
  const { secretWord, foundLetters } = props;
  if(secretWord){
    const secretWordArray = secretWord.split('');
    return(
      secretWordArray.map((element, index)=>< LetterSlot key={index} index={index} foundLetters={foundLetters}/>)
    );
  }
};

LettersPlaceHolder.propTypes = {
  secretWord: PropTypes.string,
  foundLetters: PropTypes.object
};

export default LettersPlaceHolder;