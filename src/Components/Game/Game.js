import React, { Component } from 'react';
import axios from 'axios';
import GameContinueOrOver from '../GameContinueOrOver/GameContinueOrOver.js';
import PlayAgainButton from '../PlayAgainButton/PlayAgainButton.js';
import LettersPlaceHolder from '../LettersPlaceHolder/LettersPlaceHolder.js';
import './Game.css';
import kittenStars from "../../kittenStars.png";

class Game extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      winner: false,
      guessesRemaining: 6,
      secretWord: '',
      letterGuess: '',
      difficulty: 1,
      wordIndex: 1,
      foundLetters: {},
      wrongGuess: [],
      loading: true,
    };

    this.inputField = React.createRef();
    this.searchForMatches = this.searchForMatches.bind(this);
    this.setGuess = this.setGuess.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.getSecretWord = this.getSecretWord.bind(this);
    this.levelUp = this.levelUp.bind(this);
  }
  
  componentDidMount(){
    this.getSecretWord();
  }

  getSecretWord(){
    const { difficulty, wordIndex } = this.state;
    const getWordUrl = `https://wordapi.herokuapp.com/?difficulty=${difficulty}&start=${wordIndex}&count=1`;
    axios.get(getWordUrl)
     .then((response) => {
       this.setState({
        secretWord: response.data,
        loading: false
       }, () => console.log('secret word ',this.state.secretWord));
    })
   .catch(console.error)
  }

  searchForMatches(e){
    e.preventDefault();
    const { letterGuess, secretWord, wrongGuess, guessesRemaining } = this.state; 
    let notFound = false;
    const postGuessesLeft = guessesRemaining - 1;  
    if(letterGuess && letterGuess.length <= 1){
      const secretArray = secretWord.split('');
      if(secretArray.indexOf(letterGuess) > -1){
        secretArray.forEach((element, index) => {
          if(letterGuess === element){
            let newFoundLetter = this.state.foundLetters;
            newFoundLetter[index] = element;
            const foundLetters = Object.assign(newFoundLetter, this.state.foundLetters);
            this.setState({
              foundLetters,
              guessesRemaining: postGuessesLeft 
              }, () => {
              if(Object.keys(foundLetters).length === secretWord.length){
                this.setState({
                  winner:true
                });
              }
            });
          }
        });
      } else {
        notFound = true; 
      }
      
      if(notFound){ 
        if(wrongGuess.indexOf(letterGuess) > -1){
          alert('Already Guessed this letter');
        } else {
          this.setState({
            guessesRemaining: postGuessesLeft, 
            wrongGuess: this.state.wrongGuess.concat(letterGuess)
          });
        }
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

  restartGame(difficultyLevel){
    const { wordIndex } = this.state;
    const nextSecretWord = wordIndex + 1; 
    this.setState({
      winner: false,
      guessesRemaining: 6,
      letterGuess: '',
      difficulty: difficultyLevel,
      wordIndex: nextSecretWord,
      foundLetters: {},
      wrongGuess: [],
      loading: true,
    }, () => this.getSecretWord());
  }

  levelUp(){
    const { difficulty } = this.state; 
    const nextLevel = difficulty + 1; 
    this.restartGame(nextLevel);
  }

  render(){
    const { 
      secretWord, 
      loading, 
      letterGuess, 
      foundLetters, 
      wrongGuess, 
      winner, 
      guessesRemaining
    } = this.state;

    let pageContent = null;
    let gameState = null;

    if(guessesRemaining === 0){
      gameState = (
      <GameContinueOrOver header="Game Over" subHeader="Computer has won" text="Play Again" func={this.restartGame(1)}/>
      );
    } else if(winner) {
   
//yarn balls fall down the screen
      gameState = ( 
        <div>
          <div className="pageContent">
            <div className="letterSlots">
              <LettersPlaceHolder secretWord={secretWord} foundLetters={foundLetters} />
            </div>
          </div>
          <GameContinueOrOver header="You guessed the secret word:" subHeader="next Round!" text="Start" func={() => this.levelUp}/>
       </div>
    );
     
    } else {
     gameState = (
     <div className="pageContent">
      <div className="letterSlots">
        <LettersPlaceHolder secretWord={secretWord} foundLetters={foundLetters} />
      </div>
      <div className="formWrapper">
      <form className="form" onSubmit={this.searchForMatches}>
        <div>
          <input id="letterInput" type="text" name="letter" placeholder="Type One Letter" ref={this.inputField} onChange={this.setGuess} value={letterGuess}/>
        </div>
        <button type="submit">Guess</button>
      </form>
      </div>
    </div>);
    }

    if(loading){
      pageContent = (<div className="loading">Loading...</div>);
    } else {
      pageContent = (
        <div>
          <header className="main-header">
            <div className="playsRemainingHeader">
              <div>Guesses Remaining: {guessesRemaining}</div>
              <div>Incorrect Guesses: {wrongGuess}</div>
            </div>
            <div className="main-header__svg-container">
              <img className="main-header__img" src={ kittenStars } />
            </div>
            <h1 className="main-header__title"> Guess kittens secret word one letter at a time </h1>
          </header>
          {gameState}
        </div>
      );
    }
      return (
        <div className="container" style={{display: loading ? 'none': 'block'}}>
          {pageContent}
        </div>
      );
    }
}

export default Game; 