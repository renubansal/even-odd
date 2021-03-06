import React, { Component } from "react";
import { startGame, cancelGame } from "../actions/settings";
import { connect } from "react-redux";
import {  fetchNewDeck } from "../actions/deck";
import fetchStates from "../reducers/fetchStates";
import Instructions from "./Instructions";

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };

  render() {
    console.log("this", this);
    if (this.props.fetchState === fetchStates.error) {
      return (
          <div>
            <p>Please try reloading the app. An error occurred.</p>
            <p>{this.props.message}</p>
          </div>
      )
    }
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
const mapStateToProps = state => {
    const {
        settings: { gameStarted },
        deck: { fetchState, message }
    } = state;

    return { gameStarted, fetchState, message };
}


const componentConnect = connect(mapStateToProps, {
    startGame, cancelGame,fetchNewDeck
});

export default componentConnect(App);
