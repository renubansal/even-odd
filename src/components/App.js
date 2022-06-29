import React, { Component } from "react";
import { startGame, cancelGame } from "../actions/settings";
import { connect } from "react-redux";
import { fetchDeckResult, fetchNewDeck } from "../actions/deck";
import Instructions from "./Instructions";

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };

  render() {
    console.log("this", this);
    return (
      <div>
        <h2>♡ ♤ Evens or Odds ♢ ♧</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>Game is on!</h3>
            <br />
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>Game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { gameStarted: state.gameStarted };
};

const componentConnect = connect(mapStateToProps, {
    startGame, cancelGame,fetchNewDeck
});

export default componentConnect(App);
