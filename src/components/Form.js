import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    // Steps2(creating new state compoennts or property) to convert normal html to react component
    this.state = {
      username: "",
      comments: "",
      topic: 'react',
    };
  }

  // event itself passed as a parameter from this event we can extract the value of the input element using event.target.value
  handleUsernameChange = (event) => {
    //   console.log('event', event.target.value)
    this.setState({
      username: event.target.value,
    });
  };
//   defining method as a class property both up and down and that only
  handleCommentsChange = (event) => {
      this.setState({
          comments: event.target.value,
      })
  }

  handleTopicChange = (event) => {
      this.setState({
          topic: event.target.value
      })
  }

  handleSubmit = (event) => {
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
    }
  render() {
    // const {username, comments, topic} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            // step3 assign an unchange handler that updates the state
          />
        </div>
        <div>
          {/* step1 to add element to html */}
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>


        {/* step1 to add element to html */}
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>

                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
