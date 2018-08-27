import React, { Component } from 'react';
import PropTypes from "prop-types";

const LetterPlaceHolder = (props) => {
  return (
    <div className="message">
      <p> {props.word} </p>
    </div>
  );
};

LetterPlaceHolder.propTypes = {
  word: PropTypes.string
};
export default LetterPlaceHolder;