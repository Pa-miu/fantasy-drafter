import React, { Component } from 'react';

class SingleInput extends Component {
	render() {
		return(
			<div id={this.props.gridpos} className='SingleInput'>
				<label for={this.props.inputId}>{this.props.name}</label>
				<input id={this.props.inputId} placeholder={this.props.placeholder}/>
			</div>
		);
	}
}

export default SingleInput;