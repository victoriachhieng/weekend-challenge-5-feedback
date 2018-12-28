import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, TextField, Button, Grid } from '@material-ui/core';
import FeedbackReview from '../FeedbackReview/FeedbackReview';

class FeedbackTwo extends Component {
  state = {
    understanding: 0
  };

  handleChangeUnderstanding = event => {
    this.setState({
      understanding: event.target.value
    });
  };

  handleClick = () => {
    this.props.dispatch({ type: "ADD_UNDERSTANDING", payload: this.state });
    this.props.history.push("/3");
    alert("You will be directed to step 3");
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Card>
            <center>
              <h1>2 of 4 Pages</h1>
            </center>
            <br />
            <center>
              <h4>How well are you understanding the content?</h4>
            </center>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={4}>
                <TextField
                  id="name"
                  label="Understanding"
                  onChange={this.handleChangeUnderstanding}
                  margin="normal"
                  type="number"
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

export default connect()(FeedbackTwo);
