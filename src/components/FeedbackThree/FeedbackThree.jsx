import React, { Component } from "react";
import { connect } from "react-redux";

class FeedbackThree extends Component {
  state = {
    support: 0
  };

  handleChangeSupport = event => {
    this.setState({
      support: event.target.value
    });
  };

  handleClick = () => {
    this.props.dispatch({ type: "ADD_SUPPORT", payload: this.state });
  };

  render() {
    return (
      <div>
        <h5>3 of 4 pages</h5>
        <br />
        <h4>How well are you being supported?</h4>
        <input
          onChange={this.handleChangeSupport}
          type="number"
          placeholder="response"
        />
        <br />
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default connect()(FeedbackThree);
