import React, { Component } from 'react';

class SingleInput extends Component {
	render() {
		return(
			<div className="SingleInput">
				<label for={this.props.id}>{this.props.name}</label>
				<input id={this.props.id} placeholder={this.props.placeholder}/>
			</div>
		);
	}
}

export default SingleInput;