import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import dependencies 
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


let initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

// Setup reducers
const feedback = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            // spread to keep what it was
            return { ...state, feeling: action.payload }
        case 'ADD_UNDERSTANDING':
            return { ...state, understanding: action.payload }
        case 'ADD_SUPPORT':
            return { ...state, support: action.payload }
        case 'ADD_COMMENT':
            return { ...state, comments: action.payload }
        case 'CLEAR_DATA':
            return initialState;
        default:
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
