import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class FeedbackReview extends Component {

  handleSubmit = () => {
      //sets up feedback to send to server/db with values held in redux
      const feeling = this.props.reduxStore.feedbackOne.feeling;
      const understanding = this.props.reduxStore.feedbackTwo.understanding;
      const support = this.props.reduxStore.feedbackThree.support;
      const comments = this.props.reduxStore.commentFeedback.comments;
      let feedBackToSend = {
          feeling: feeling,
          understanding: understanding,
          support: support,
          comments: comments
      }
    axios.post('/feedback', feedBackToSend)
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
  }; 

  render() {
      let buttonToUse;
      if (this.props.reduxStore.feedbackOne.feeling !== '' &&
          this.props.reduxStore.feedbackTwo.understanding !== '' &&
          this.props.reduxStore.feedbackThree.support !== '' &&
          this.props.reduxStore.commentFeedback.comments !== '') {
          buttonToUse = <Button variant="raised" onClick={this.handleSubmit}>Submit</Button>
      } else {
          buttonToUse = <Button disabled variant="raised">Finish Feedback</Button>
      }
    return (
      <div>
        <h4>Your Feedback</h4>
        <p>Feeling: {this.props.reduxStore.feedbackOne.feeling}</p>
        <p>Understanding: {this.props.reduxStore.feedbackTwo.understanding}</p>
        <p>Support: {this.props.reduxStore.feedbackThree.support}</p>
        <p>Comments: {this.props.reduxStore.commentFeedback.comments}</p>
        {buttonToUse}
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => {
    //this makes this.props.reduxStore
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(FeedbackReview);
