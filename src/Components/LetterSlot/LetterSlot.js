import React, { Component } from 'react';

class LetterSlot extends Component {
  constructor(props){
    super(props);
    this.letterRef = React.createRef();
  }

  render(){

    const {index, foundLetters} = this.props;

    if(foundLetters[index]){
      return(
        <span ref={this.letterRef}>{foundLetters[index]}</span>
     );
    } else {
      return(
        <span ref={this.letterRef}>_________ </span>
     );
    }
  }
}

export default LetterSlot;