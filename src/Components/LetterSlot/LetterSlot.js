import React, { Component } from 'react';

class LetterSlot extends Component {
  constructor(props){
    super(props);
    this.letterRef = React.createRef();
  }

  render(){
    return(
      <span ref={this.letterRef}>_________ </span>
    );
  }
}

export default LetterSlot;