import React, { Component } from "react";
import PropTypes from "prop-types";
class Navbar extends Component {
  static defaultProps = {
    title: "Todo- S&S"
  };
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="Navbar bg-blue">
        <div className="large text-center p ">{this.props.title}</div>
      </div>
    );
  }
}

export default Navbar;
