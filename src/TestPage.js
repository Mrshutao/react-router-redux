import React, { Component } from 'react';
import { connect } from 'react-redux';
class Test extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
		};
	}
	onChange(e) {
		this.setState({
			value: e.target.value,
		});
	}
	save() {
		Event.publish('inputOnChange', { value: this.state.value });
	}
	render() {
		return (
			<div>
				<input
					onChange={e => {
						this.onChange(e);
					}}
					value={this.state.value}
				/>
				<button onClick={() => this.save()}>确定</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { shit: state };
};
const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Test);
