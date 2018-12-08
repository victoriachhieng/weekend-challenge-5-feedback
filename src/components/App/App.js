import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from '../Navbar/Navbar';
import FeedbackOne from '../FeedbackOne/FeedbackOne';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <br/>
        <FeedbackOne/>
      </div>
    );
  }
}

export default App;
