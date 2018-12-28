import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import FeedbackReview from '../FeedbackReview/FeedbackReview';

class CommentFeedback extends Component {
  state = {
    comments: ""
  };

  handleChangeComments = event => {
    event.preventDefault();
    this.setState({
      comments: event.target.value
    });
  };

  handleClick = () => {
    this.props.dispatch({ type: "ADD_COMMENT", payload: this.state });
    this.props.history.push("/5");
    alert("Feedback Completed!");
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Card>
            <center>
              <h1>4 of 4 Pages</h1>
            </center>
            <br />
            <center>
              <h4>Any comments you want to leave?</h4>
            </center>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={4}>
                <TextField
                  id="name"
                  label="Comments"
                  onChange={this.handleChangeComments}
                  margin="normal"
                  type="text"
                />
              </Grid>
              <Grid item xs={1}>
                <Button variant="raised" onClick={this.handleClick}>
                  Next
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

export default connect()(CommentFeedback);
