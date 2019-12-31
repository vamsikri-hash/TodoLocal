import React, { Component } from "react";
import Showitem from "./Showitem";

class Showitems extends Component {
  render() {
    const Items = this.props.Items;
    return (
      <div className="grid-style">
        {Items != null &&
          Items.map((item, index) => <Showitem key={index} item={item} />)}
      </div>
    );
  }
}
export default Showitems;
