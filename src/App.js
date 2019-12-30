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
        : []
    };
  }
  update = () => {
    this.setState({
      Items: localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : []
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="side-side">
          <div className="cont1">
            <Form update={this.update} />
            <Clear update={this.update} />
          </div>
          <div className="cont2">
            <Showitems Items={this.state.Items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
