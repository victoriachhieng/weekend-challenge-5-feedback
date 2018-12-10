import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feedbackOne = (state = [], action) => {
    switch (action.type) {
        case "ADD_FEELING":
            return action.payload;
        case "CLEAR_FEEDBACK":
            return action.payload;
        default:
            return state;
    }
};

const feedbackTwo = (state = [], action) => {
    switch (action.type) {
        case "ADD_UNDERSTANDING":
            return action.payload;
    }
    return state;
}

const feedbackThree = (state = [], action) => {
    switch (action.type) {
        case "ADD_SUPPORT":
            return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feedbackOne,
        feedbackTwo,
        feedbackThree
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();