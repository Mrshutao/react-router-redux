import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_NOTE, DELETE_NOTE } from './redux/actions';
import './css/App.css';
import './common';
import { Link } from 'react-router';
class App extends Component {
	constructor() {
		super();
		this.state = {
			title: '我是默认值',
		};
	}
	componentDidMount() {
		Event.subscribe('inputOnChange', data => {
			this.setState({ title: data.value });
		});
	}

	todo() {
		this.props.actions.ADD_NOTE({ title: '语文', text: '静夜思' });
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-title">{this.state.title}</p>
				<button onClick={() => this.todo()}>点击改变名字</button>
				<Link to="/test">点击跳转</Link>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return { shit: state };
};
const mapDispatchToProps = dispatch => {
	return {
		actions: {
			ADD_NOTE: args => dispatch({ type: ADD_NOTE, id: 0, title: args.title, note: args.text }),
			DELETE_NOTE: args => dispatch({ type: DELETE_NOTE, data: args }),
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
