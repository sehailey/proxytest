import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./s";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      error: "",
      eee: "",
      text: ""
    };
  }
  componentDidMount = () => this.fetchAPIMessage();

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/message`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (e) {
      console.log(e);
      this.setState({ error: "Did not get data from Express" });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>WELCOME CREATE REACT APP!</p>
          <div className="App-link">{this.state.message}</div>
          <ComponentA />
        </header>
      </div>
    );
  }
}

export default App;
