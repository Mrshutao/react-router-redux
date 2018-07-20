import React from 'react';
import { Route as _Route } from 'react-router';
import App from '../App';
import Test from '../TestPage';
const Route = _Route;

export default (
	<Route>
		<Route path="/" component={App} />
		<Route path="/test" component={Test} />
	</Route>
);
