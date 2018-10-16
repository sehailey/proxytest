import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "Did not get data from Express",
      error: "",
      eee: "",
      text: ""
    };
  }
  componentDidMount() {
    this.fetchExpress();
  }

  fetchExpress = async () => {
    const eee = await fetch(`/api`).then(res => console.log(res));
    console.log(eee);
    try {
      const response = await fetch(`/api`);
      const text = await response.text();
      console.log(text);
      const { data } = await response.json();
      console.log("data", data);
      this.setState({ data: data });
    } catch (e) {
      console.log(e);
      this.setState({ error: e });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>WELCOME CREATE REACT APP!</p>
          <div className="App-link">{this.state.data}</div>
          <div>error: {this.state.error}</div>
          <div>text: {this.state.text}</div>
          <div>eee: {this.state.eee}</div>
        </header>
      </div>
    );
  }
}

export default App;
