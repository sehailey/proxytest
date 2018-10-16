import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: "Did not get data from Express", error: "" };
  }
  componentDidMount() {
    this.fetchExpress();
  }

  fetchExpress = async () => {
    try {
      const response = await fetch(`/api`);
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
        </header>
      </div>
    );
  }
}

export default App;
