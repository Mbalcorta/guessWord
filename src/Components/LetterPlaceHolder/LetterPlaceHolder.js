import React, { Component } from 'react';
import PropTypes from "prop-types";

const LetterPlaceHolder = (props) => {
  const { word } = props;
  const wordsArray = word.split('');

  return (
      wordsArray.map((element, index)=><span key={index} id={index}>_________ </span>)
  );
  
};

LetterPlaceHolder.propTypes = {
  word: PropTypes.string
};
export default LetterPlaceHolder;