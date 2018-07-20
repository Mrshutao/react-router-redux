import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './redux/store';
import router from './redux/routes';

const store = createStore({}, browserHistory);
store.asyncReducers = {};
const _history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={_history} routes={router} />
	</Provider>,
	document.getElementById('root')
);
