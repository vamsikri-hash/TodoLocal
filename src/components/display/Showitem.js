import React, { Component, Fragment } from "react";

class Showitem extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(tit) {
    this.props.del(tit);
    /* const itarray = JSON.parse(localStorage.getItem("items"));
    for (let i = 0; i < itarray.length; i++) {
      if (itarray[i].title === tit) {
        itarray.splice(i, 1);
      }
    }
    localStorage.setItem("items", JSON.stringify(itarray)); */
  }
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
            <button
              className="btn btn-danger m-2"
              onClick={this.handleDelete.bind(this, title)}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Showitem;
