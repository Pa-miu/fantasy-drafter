import React, { Component } from 'react';

class SingleInput extends Component {
	render() {
		return (
			<div className='SingleInput'>
				<label htmlFor={this.props.inputId}>{this.props.name}</label>
				<input 
					id={this.props.inputId} 					
					placeholder={this.props.placeholder}
					onChange={this.props.onChange}
					value={this.props.value}/>
			</div>
		);
	}
}

export default SingleInput;