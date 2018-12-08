import React, {Component} from 'react';

class FeedbackOne extends Component {
    render(){
        return(
            <div>
            <h5>1 of 4 pages</h5>
                <br/>
            <h4>How are you feeling today?</h4>
            <input type="text" placeholder="response"/>
            <br/>
            <button>Next</button>
            </div>
        )
    }
}

export default FeedbackOne;