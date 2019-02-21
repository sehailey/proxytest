import React, { Component } from "react";

const ComponentB = props => {
  const { instruction } = props;
  return <div>{instruction}</div>;
};

const ComponentC = props => {
  const { instruction } = props;
  return <div>{instruction}</div>;
};

const ComponentD = props => {
  const { instruction } = props;
  return <div>{instruction}</div>;
};

class componentA extends Component {
  constructor() {
    super();
    this.state = { instruction: "not submit" };
    this.instruction = this.instruction.bind(this);
  }

  instruction() {
    console.log("Do some processing here? And then maybe some POST method");
    this.setState({ instruction: "submit" });
  }

  render() {
    return (
      <div>
        <ComponentB instruction={this.state.instruction} />
        <ComponentC instruction={this.state.instruction} />
        <ComponentD instruction={this.state.instruction} />
        <button type="button" color="primary" onClick={this.instruction}>
          Submit
        </button>
      </div>
    );
  }
}

export default componentA;
