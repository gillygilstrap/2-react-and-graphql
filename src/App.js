import React, { Component } from "react";
import Library from "./Urql";
// import Library from './Apollo';
// import Library from './ApolloHooks';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Library />
      </div>
    );
  }
}

export default App;
