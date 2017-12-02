import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import AuthenticationReducer from './AuthenticationReducer';
import AppReducer from './AppReducer';

const reducers = combineReducers({
    AuthenticationReducer,
    AppReducer
});

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
