import React, { Component } from "react";
let itemsarray = [];
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      deadline: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDes = this.handleDes.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleDes(event) {
    this.setState({ description: event.target.value });
  }
  handleDate(event) {
    this.setState({ deadline: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.title);
    itemsarray.push(this.state);
    localStorage.setItem("items", JSON.stringify(itemsarray));
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label className="lead">
            Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label className="lead">
            Description:
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleDes}
            />
          </label>
          <label>
            Deadline:
            <input
              type="date"
              value={this.state.deadline}
              onChange={this.handleDate}
            />
          </label>
          <input type="submit" value="Add" className=" btn btn-success" />
        </form>
      </div>
    );
  }
}
export default Form;
