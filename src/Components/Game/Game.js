import React, { Component } from 'react';
import $ from 'jquery'; 

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
    $.ajax({
      method: 'GET',
      url: getWordUrl,
      dataType: 'jsonp', //change the datatype to 'jsonp' works in most cases
      success: (res) => {
       console.log(res.text());
      }
    });
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