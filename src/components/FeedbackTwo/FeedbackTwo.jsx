import React, {Component} from 'react';
import {connect} from 'react-redux';

class FeedbackTwo extends Component {

    state = {
        understanding: 0,
    }

    handleChangeUnderstanding = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state})
        this.props.history.push('/3')
        alert("You will be directed to step 3");
    }

    render(){
        return(
            <div>
                <h5>2 of 4 pages</h5>
                <br />
                <h4>How well are you understanding the content?</h4>
                <input onChange={this.handleChangeUnderstanding} type="number" placeholder="response"
                />
                <br />
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(FeedbackTwo);