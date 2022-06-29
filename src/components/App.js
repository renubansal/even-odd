import React, { Component } from "react";
import { connect } from "react-redux";
class App extends Component {
  render() {
    console.log("this", this);
    return (
      <div>
        <h2>React App</h2>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { gameStarted: state.gameStarted };
};

const componentConnect = connect(mapStateToProps);

export default componentConnect(App);
