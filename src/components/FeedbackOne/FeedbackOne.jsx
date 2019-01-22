import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, TextField, Button, Grid } from "@material-ui/core";
import FeedbackReview from "../FeedbackReview/FeedbackReview";

class FeedbackOne extends Component {
  state = {
    feeling: 0
  };

  handleChangeFeelings = event => {
    console.log("in handleChange");
    this.setState({
      feeling: event.target.value
    });
  };

  handleClick = () => {
    // collect data and send to redux
    this.props.dispatch({ type: "ADD_FEELING", payload: this.state.feeling });
    // direct to page 2
    this.props.history.push("/2");
    alert("You will be directed to step 2");
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={4}>
          <Card>
            <center><h1>1 of 4 Pages</h1></center>
            <br />
            <center><h4>How are you feeling today?</h4></center>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={4}>
                <TextField
                  id="name"
                  label="Feeling"
                  onChange={this.handleChangeFeelings}
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
            <center><FeedbackReview /></center>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default connect()(FeedbackOne);
