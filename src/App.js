import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.fetchExpress();
  }

  fetchExpress = async () => {
    const response = await fetch(`/api`);
    console.log(("response": response));
    const data = await response.body;

    console.log(("data": data));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>WELCOME CREATE REACT APP!</p>
          <div className="App-link">{this.state.data}</div>
        </header>
      </div>
    );
  }
}

export default App;
