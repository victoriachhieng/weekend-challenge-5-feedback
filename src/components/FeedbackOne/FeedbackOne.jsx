import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeedbackOne extends Component {

  state = {
    feeling: 0
  }

  handleChangeFeelings = event => {
    console.log("in handleChange");
    this.setState({
      feeling: event.target.value
    })
  }

  handleClick = () => {
      this.props.dispatch({ type: "ADD_FEELING", payload: this.state })
    }

  render() {
    return (
      <div>
        <h5>1 of 4 pages</h5>
        <br />
        <h4>How are you feeling today?</h4>
        <input onChange={this.handleChangeFeelings} type="number" placeholder="response"
        />
        <br />
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default connect()(FeedbackOne);