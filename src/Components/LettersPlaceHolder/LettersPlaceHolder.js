import React from 'react';
import PropTypes from 'prop-types';
import LetterSlot from '../LetterSlot/LetterSlot.js';

const LettersPlaceHolder = (props) => {
  const { secreteWord } = props;
  if(secreteWord){
    const secreteWordArray = secreteWord.split('');
    return(
      secreteWordArray.map((element, index)=>< LetterSlot key={index}/>)
    );
  }
};

LettersPlaceHolder.propTypes = {
  secreteWord: PropTypes.string
};

export default LettersPlaceHolder;