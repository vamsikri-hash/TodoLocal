import React, { Component } from "react";
import Showitem from "./Showitem";

class Showitems extends Component {
  render() {
    const Items = this.props.Items;
    return (
      <div>
        <div className="text-center">
          {localStorage.getItem("items") != null && <h1>Todo Items</h1>}
        </div>
        <div className="grid-style">
          {Items != null &&
            Items.map((item, index) => <Showitem key={index} item={item} />)}
        </div>
      </div>
    );
  }
}
export default Showitems;
