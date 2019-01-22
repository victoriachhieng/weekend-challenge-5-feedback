import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class FeedbackReview extends Component {

  state = {
    feeling: this.props.feedback.feeling,
    understanding: this.props.feedback.understanding,
    support: this.props.feedback.support,
    comments: this.props.feedback.comments,
  };

  handleSubmit = () => {
    axios.post("/feedback", this.state)
      .then(response => {
          alert("Survey successfully submitted!");
        console.log(response);
      })
      .catch(error => {
        console.log("error in FeedbackReview", error);
      });
  };

  render() {
    // if survery is not completely filled out disable submit button
    let buttonToUse;
    if (
      this.props.feedback.feeling !== "" &&
      this.props.feedback.understanding !== "" &&
      this.props.feedback.support !== "" &&
      this.props.feedback.comments !== ""
    ) {
      buttonToUse = (
        <Button variant="raised" onClick={this.handleSubmit}>
          Submit
        </Button>
      );
    } else {
      buttonToUse = (
        <Button disabled variant="raised">
          Incomplete
        </Button>
      );
    }
    return (
      <div>
        <h4>Your Feedback</h4>
        <p>Feeling: {this.props.feedback.feeling}</p>
        <p>Understanding: {this.props.feedback.understanding}</p>
        <p>Support: {this.props.feedback.support}</p>
        <p>Comments: {this.props.feedback.comments}</p>
        {buttonToUse}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return { 
        feedback: reduxStore.feedback
    };
}

export default connect(mapStateToProps)(FeedbackReview);
