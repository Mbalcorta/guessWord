import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "normalize.css";
import "./App.css";
import kittenStars from "./kittenStars.png";
import Game from "./Components/Game/Game.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
          <div className="main-header__svg-container">
            <img className="main-header__img" src={ kittenStars } />
          </div>
          <h1 className="main-header__title"> Translate kitten secret word one letter at a time </h1>
        </header>
        <section className="container">
          < Game />
          {/* <Message message="Welcome to the react-starter. Start hacking away!" /> */}
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
