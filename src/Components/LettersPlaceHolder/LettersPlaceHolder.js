import React from 'react';
import PropTypes from 'prop-types';
import LetterSlot from '../LetterSlot/LetterSlot.js';

const LettersPlaceHolder = (props) => {
  const { secreteWord, foundLetters } = props;
  if(secreteWord){
    const secreteWordArray = secreteWord.split('');
    return(
      secreteWordArray.map((element, index)=>< LetterSlot key={index} index={index} foundLetters={foundLetters}/>)
    );
  }
};

LettersPlaceHolder.propTypes = {
  secreteWord: PropTypes.string
};

export default LettersPlaceHolder;