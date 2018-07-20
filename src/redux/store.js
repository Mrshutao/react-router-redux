import { applyMiddleware, createStore, combineReducers } from 'redux';
//import { routerMiddleware } from 'react-router-redux';
//import thunkMiddleware from 'redux-thunk';
import { login, notes } from './reducer';
import * as createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';

const makeRootReducer = asyncReducers => {
	return combineReducers({
		routing: routerReducer,
		...asyncReducers,
	});
};

export default (initialState = {}, history) => {
	const store = createStore(makeRootReducer({ login, notes }), initialState, applyMiddleware(createLogger()));
	return store;
};
