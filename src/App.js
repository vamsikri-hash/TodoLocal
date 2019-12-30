import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Form from "./components/forms/Form";
import "./App.css";
import Clear from "./components/forms/Clear";
import Showitems from "./components/display/Showitems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="side-side">
          <div className="cont1">
            <Form />
            <Clear />
          </div>
          <div className="cont2">
            <Showitems />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
