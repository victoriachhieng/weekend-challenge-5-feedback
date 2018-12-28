import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from '../Navbar/Navbar';
import FeedbackOne from '../FeedbackOne/FeedbackOne';
import FeedbackTwo from '../FeedbackTwo/FeedbackTwo';
import FeedbackThree from '../FeedbackThree/FeedbackThree';
import CommentFeedback from '../CommentFeedback/CommentFeedback';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={FeedbackOne} />
          <Route path="/2" component={FeedbackTwo} />
          <Route path="/3" component={FeedbackThree} />
          <Route path="/4" component={CommentFeedback} />
          <Route path="/5" component={Success} />
        </div>
      </Router>;
  }
}

export default App;
