import {
    createStore,
    combineReducers
} from 'redux';


import conuterReducer from '../reducers/counterReducers';
import todoListReducers from '../reducers/todoListReducers';
import userNameListReducer from '../reducers/userNameListReducer.js';

const rootReducer = combineReducers({
    conuterReducer,
    todoListReducers,
    userNameListReducer,
});

export default createStore(rootReducer);