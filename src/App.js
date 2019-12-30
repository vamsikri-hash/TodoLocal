import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Form from "./components/forms/Form";
import "./App.css";
import Clear from "./components/forms/Clear";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Form />
        <Clear />
      </div>
    );
  }
}

export default App;
