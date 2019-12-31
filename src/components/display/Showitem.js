import React, { Component, Fragment } from "react";

class Showitem extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {}
  render() {
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
            {deadline && (
              <Fragment>
                <strong>Deadline:</strong>
                {deadline}
              </Fragment>
            )}
          </li>
        </ul>
      </div>
    );
  }
}
export default Showitem;
