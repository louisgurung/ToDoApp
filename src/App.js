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
    return (
      <div className="App">
        <h1>TO-DO-APP--testing123</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button>Submit</button>
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
