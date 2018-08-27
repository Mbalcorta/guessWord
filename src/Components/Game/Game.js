import React, { Component } from 'react';
import axios from 'axios';

class Game extends Component {
  constructor(props){
    super(props);

    this.state = {
      winner: false,
      counter: 6,
      word: 'wood',
      difficulty: 1,
      foundLetters: {}
    };
  }

  componentDidMount(){
    const { difficulty } = this.state;
    const getWordUrl = `https://wordapi.herokuapp.com/?difficulty=${difficulty}&start=10&count=1`;
     axios.get(getWordUrl)
     .then(function (response) {
     console.log(response.data);
   })
   .catch(function (error) {
    console.log(error);
   })
  }

  render(){
    return(
      <div>
        Hello
        {this.state.word}
      </div>
    );
  }
}

export default Game; 