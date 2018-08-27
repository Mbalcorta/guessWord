import React, { Component } from 'react';
import axios from 'axios';
import LetterPlaceHolder from '../LetterPlaceHolder/LetterPlaceHolder.js';
import './Game.css';

class Game extends Component {
  constructor(props){
    super(props);

    this.state = {
      winner: false,
      counter: 6,
      word: '',
      difficulty: 1,
      wordIndex: 1,
      foundLetters: {}
    };
  }

  componentDidMount(){
    const { difficulty, wordIndex } = this.state;
    const getWordUrl = `https://wordapi.herokuapp.com/?difficulty=${difficulty}&start=${wordIndex}&count=1`;
    const nextWord = wordIndex + 1;
    axios.get(getWordUrl)
     .then((response) => {
       this.setState({
         word: response.data,
         wordIndex: nextWord
       });
    })
   .catch(console.error)
  }

  render(){
    const { word } = this.state
    return(
      <div className="letterSlots">
        <LetterPlaceHolder word={word} />
      </div>
    );
  }
}

export default Game; 