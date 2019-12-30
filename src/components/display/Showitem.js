import React, { Component } from "react";

class Showitem extends Component {
  render() {
    const { title, description, date } = this.props.item;
    console.log(title);
    return <div>{title}</div>;
  }
}
export default Showitem;
