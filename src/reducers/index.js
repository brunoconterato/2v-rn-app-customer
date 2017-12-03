import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import AuthenticationReducer from './AuthenticationReducer';
import AppNavigationReducer from './AppNavigationReducer';

const reducers = combineReducers({
    AuthenticationReducer,
    AppNavigationReducer
});

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
