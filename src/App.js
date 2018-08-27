import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "normalize.css";
import "./App.css";
import Game from "./Components/Game/Game.js";

class App extends Component {
  render() {
    return (
      <div className="App">
       < Game />
      </div>
    );
  }
}

export default hot(module)(App);
