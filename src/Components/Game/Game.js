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
      loading: true,
    };

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
       });
    })
   .catch(console.error)
  }

  searchForMatches(e){
    e.preventDefault();
    const { letterGuess } = this.state; 
    if(letterGuess && letterGuess.length <= 1){
      console.log('hello');
    } else {
      alert('must enter in a single letter to play');
    }
  }

  setGuess(e){
    const letterGuess = e.target.value.toLowerCase();
    this.setState({
      letterGuess: letterGuess
    }, () => console.log(this.state.letterGuess));
  }

  render(){
    const { secreteWord, loading } = this.state;
    let pageContent = null;
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
          <section className="container">
            <div>
              <form onSubmit={this.searchForMatches}>
                <div>
                  <input id="letterInput" type="text" name="letter" placeholder="Type One Letter" onChange={this.setGuess}/>
                </div>
                <button type="submit">Guess</button>
              </form>
              <div className="letterSlots">
                <LettersPlaceHolder secreteWord={secreteWord} />
              </div>
            </div>
            {/* <Message message="Welcome to the react-starter. Start hacking away!" /> */}
          </section>
        </div>
      )
    }
      return (
        <div>
          {pageContent}
        </div>
      );
    }
}

export default Game; 