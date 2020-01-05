import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Form from "./components/forms/Form";
import "./App.css";
import Clear from "./components/forms/Clear";
import Showitems from "./components/display/Showitems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [],
      todo: []
    };
  }
  add = it => {
    let arr = this.state.todo;
    arr.push(it);
    this.setState({ todo: arr });
    localStorage.setItem("items", JSON.stringify(this.state.todo));
    this.setState({
      Items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : []
    });
  };

  delete = tit => {
    const itarray = this.state.todo;
    for (let i = 0; i < itarray.length; i++) {
      if (itarray[i].title === tit) {
        itarray.splice(i, 1);
      }
    }
    this.setState({ todo: itarray });
    localStorage.setItem("items", JSON.stringify(this.state.todo));
    this.setState({
      Items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : []
    });
  };
  Clear = () => {
    this.setState({ Items: [], todo: [] });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="side-side">
          <div className="cont1">
            <Form add={this.add} />
            <Clear Clear={this.Clear} />
          </div>
          <div className="cont2">
            <Showitems Items={this.state.Items} delete={this.delete} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
