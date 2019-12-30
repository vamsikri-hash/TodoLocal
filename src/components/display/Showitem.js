import React, { Component } from "react";

class Showitem extends Component {
  render() {
    //eslint-disable-next-line
    const { title, description, deadline } = this.props.item;

    console.log(title);
    return (
      <div className="card">
        <ul>
          <li>
            <strong>Title:</strong>
            {title}
          </li>
          <li>
            <strong>Description:</strong>
            {description}
          </li>
          <li>
            <strong>Deadline:</strong>
            {deadline}
          </li>
        </ul>
      </div>
    );
  }
}
export default Showitem;
