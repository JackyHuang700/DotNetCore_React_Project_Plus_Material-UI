import {
    createStore,
    combineReducers
} from 'redux';


import conuterReducer from '../reducers/counterReducers';
import todoListReducers from '../reducers/todoListReducers';

const rootReducer = combineReducers({
    conuterReducer,
    todoListReducers,
});

export default createStore(rootReducer);