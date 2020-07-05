import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    // Steps2(creating new state compoennts) to convert normal html to react component
    this.state = {
      username: "",
      comments: ''
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
        <div>
            {/* step1 to add element to html */}
            <label>Comments</label>
            <textarea value={this.state.comments}></textarea>
        </div>
      </form>
    );
  }
}

export default Form;
