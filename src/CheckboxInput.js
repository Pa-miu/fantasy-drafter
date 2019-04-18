import React, { Component } from 'react';

class CheckboxInput extends Component {
	render() {
		return (
			<div className='CheckboxInput'>
				<label for={this.props.inputId}>{this.props.name}</label>
				<input id={this.props.inputId} type='checkbox' value={this.props.checked}/>
			</div>
		);
	}
}

export default CheckboxInput;