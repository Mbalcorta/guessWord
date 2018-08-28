import React, { Component } from 'react';
import axios from 'axios';
import LettersPlaceHolder from '../LettersPlaceHolder/LettersPlaceHolder.js';
import './Game.css';
import kittenStars from "../../kittenStars.png";

class Game extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      winner: false,
      counter: 6,
      secreteWord: '',
      letterGuess: '',
      difficulty: 1,
      wordIndex: 1,
      foundLetters: {},
      wrongGuess: 0,
      loading: true,
    };

    this.inputField = React.createRef();
    this.searchForMatches = this.searchForMatches.bind(this);
    this.setGuess = this.setGuess.bind(this);
  }
  
  componentDidMount(){
    const { difficulty, wordIndex } = this.state;
    const getWordUrl = `https://wordapi.herokuapp.com/?difficulty=${difficulty}&start=${wordIndex}&count=1`;
    const nextWord = wordIndex + 1;
    axios.get(getWordUrl)
     .then((response) => {
       this.setState({
        secreteWord: response.data,
        wordIndex: nextWord,
        loading: false
       }, () => console.log('secrete word ',this.state.secreteWord));
    })
   .catch(console.error)
  }

  searchForMatches(e){
    e.preventDefault();
    const { letterGuess, secreteWord, wrongGuess } = this.state; 
    let notFound = false; 
    if(letterGuess && letterGuess.length <= 1){
      const secreteArray = secreteWord.split('');
      if(secreteArray.indexOf(letterGuess) > -1){
        secreteArray.forEach((element, index) => {
          if(letterGuess === element){
            let newFoundLetter = this.state.foundLetters;
            newFoundLetter[index] = element;
            const foundLetters = Object.assign(newFoundLetter, this.state.foundLetters);
            this.setState({foundLetters});
          }
        });
      } else {
        notFound = true; 
      }
      
      if(notFound){
        const wrongGuessPlusOne = wrongGuess + 1; 
        this.setState({
          wrongGuess: wrongGuessPlusOne
        });
      }
      this.setState({
        letterGuess: ''
      });
    } else {
      this.setState({
        letterGuess: ''
      }, () =>  alert('must enter in a single letter to play'));
    }
  }

  setGuess(){
      const letterGuess = this.inputField.current.value.toLowerCase();
      this.setState({
        letterGuess: letterGuess
      });
  }

  render(){
    const { secreteWord, loading, letterGuess, foundLetters, wrongGuess } = this.state;
    let pageContent = null;
    let gameState = null;

    if(wrongGuess === 6){
     gameState = (<div>Game Over</div>);
    } else {
     gameState = (
     <section className="container">
      <div>Wrong Guess Count: {wrongGuess}</div>
        <div>
          <form onSubmit={this.searchForMatches}>
            <div>
              <input id="letterInput" type="text" name="letter" placeholder="Type One Letter" ref={this.inputField} onChange={this.setGuess} value={letterGuess}/>
            </div>
            <button type="submit">Guess</button>
          </form>
          <div className="letterSlots">
          <LettersPlaceHolder secreteWord={secreteWord} foundLetters={foundLetters} />
          </div>
        </div>
      </section>);
    }

    if(loading){
      pageContent = (<div className="loading">Loading...</div>);
    } else {
      pageContent = (
        <div style={{display: loading ? 'none': 'block'}}>
          <header className="main-header">
          <div className="main-header__svg-container">
            <img className="main-header__img" src={ kittenStars } />
          </div>
          <h1 className="main-header__title"> Translate kitten secret word one letter at a time </h1>
          </header>
          {gameState}
        </div>
      );
    }
      return (
        <div>
          {pageContent}
        </div>
      );
    }
}

export default Game; 