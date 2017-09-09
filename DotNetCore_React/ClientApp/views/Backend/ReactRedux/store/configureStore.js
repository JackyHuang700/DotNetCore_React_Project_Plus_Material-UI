import {
    createStore,
    combineReducers
} from 'redux';


import conuterReducer from '../reducers/counterReducers';

const rootReducer = combineReducers({
    conuterReducer
});

export default createStore(rootReducer);