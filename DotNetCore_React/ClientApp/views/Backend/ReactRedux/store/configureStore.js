import {
    createStore,
    combineReducers
} from 'redux';

import { reducer as reduxFormReducer } from 'redux-form';


import conuterReducer from '../reducers/counterReducers';
import todoListReducers from '../reducers/todoListReducers';
import userNameListReducer from '../reducers/userNameListReducer.js';

const rootReducer = combineReducers({
    conuterReducer,
    todoListReducers,
    userNameListReducer,

    form: reduxFormReducer, // mounted under "form"
});

export default createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());