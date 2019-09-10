import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./ListofToDos";
import ListofToDos from "./ListofToDos";

class App extends Component {
  state = {
    text: "",
    items: []
  };

  onChange = event => {
    this.setState({ text: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      text: "",
      items: [...this.state.items, this.state.text]
    });
  };

  removeItem = id => {
    const items = this.state.items.filter((items, index) => {
      return index !== id;
    });
    this.setState({ items });
  };

  render() {
    const style = {
      margin: "20px",
      fontSize: "50px",
      fontfamily: "Helvetica",
      color: "#006400"
    };

    const inputBox = {
      padding: "10px",
      margin: "10px",
      height: "50px",
      textAlign: "center",
      borderRadius: "10",
      borderWidth: "2",
      borderColor: "white"
    };

    return (
      <div className="App">
        <h1 style={style}>TO-DO-APP</h1>
        <h6>(Click on the text to delete it)</h6>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.text}
            onChange={this.onChange}
            style={inputBox}
          />

          <button style={{ backgroundColor: "#6B8E23" }}>Submit</button>
        </form>
        <ListofToDos
          items={this.state.items}
          removeItem={this.removeItem}
        ></ListofToDos>
      </div>
    );
  }
}

export default App;
