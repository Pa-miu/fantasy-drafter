import React, { Component } from 'react';

class CheckboxInput extends Component {
	render() {
		return (
			<div className='CheckboxInput'>
				<label htmlFor={this.props.inputId}>{this.props.name}</label>
				<input 
					checked={this.props.checked}
					id={this.props.inputId} 
					onChange={this.props.onChange}
					type='checkbox'/>
			</div>
		);
	}
}

export default CheckboxInput;