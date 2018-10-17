import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
  componentDidMount() {
    this.fetchExpress();
  }

  fetchExpress = async () => {
    const ftch = await fetch(`/api`).then(res => console.log(res));
    console.log("fetch response: ", ftch);

    await fetch(`/api`).then(res => console.log("res.json:", res.json()));

    await fetch(`/api`).then(res => console.log("res.body:", res.body));

    try {
      const response = await fetch(`/api`);
      const { data } = await response.json();
      console.log("data", data);
      this.setState({ data: data });
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
          <div className="App-link">{this.state.data}</div>
        </header>
      </div>
    );
  }
}

export default App;
