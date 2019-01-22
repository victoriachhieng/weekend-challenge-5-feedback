import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Grid } from '@material-ui/core';
import FeedbackReview from '../FeedbackReview/FeedbackReview';

class Success extends Component {
  
  state = {};
  //resets data in redux and allows user to leave new feedback
  newFeedback = () => {
    this.setState({
      feeling: '',
      understanding: '',
      support: '',
      comments: ''
    });
    this.props.dispatch({ type: "CLEAR_DATA", payload: this.state });
    this.props.history.push('/');
    alert('You will be directed to start a new Feedback.');
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Card>
            <center>
              <h1>Please Submit your Feedback!</h1>
            </center>
            <br />

            <Grid container justify="center" alignItems="center">
              <Grid item xs={4} />
              <Grid item xs={8}>
                <Button variant="raised" onClick={this.newFeedback}>
                  Leave New Feedback
                </Button>
              </Grid>
            </Grid>
            <center>
              <FeedbackReview />
            </center>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(Success);
