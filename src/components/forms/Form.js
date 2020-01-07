import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      deadline: ""
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title === "") {
      alert("Enter the Title");
    } else if (this.state.description === "") {
      alert("write the description...");
    } else {
      //  let itemsarray = localStorage.getItem("items")
      //  ? JSON.parse(localStorage.getItem("items"))
      //: [];
      // itemsarray.push(this.state);

      // localStorage.setItem("items", JSON.stringify(itemsarray));
      this.props.add(this.state);
      this.setState({ title: "", description: "", deadline: "" });
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label className="lead">
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="enter the title"
            />
          </label>
          <label className="lead">
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="write the description"
            />
          </label>
          <label>
            Deadline:
            <input
              type="date"
              name="deadline"
              value={this.state.deadline}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" className=" btn btn-success" />
        </form>
      </div>
    );
  }
}
export default Form;
