import React, { Component } from "react";

class Clear extends Component {
  constructor() {
    super();
    this.handleClear = this.handleClear.bind(this);
  }
  handleClear() {
    localStorage.clear();
    this.props.Clear();
  }
  render() {
    return (
      <div>
        <button className=" btn btn-danger m-2" onClick={this.handleClear}>
          CLEAR ALL
        </button>
      </div>
    );
  }
}
export default Clear;
