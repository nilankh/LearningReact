import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  // event itself passed as a parameter from this event we can extract the value of the input element using event.target.value
  handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
      </form>
    );
  }
}

export default Form;
