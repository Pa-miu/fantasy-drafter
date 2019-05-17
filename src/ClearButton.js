import React, { Component } from 'react';

class ClearButton extends Component {
	render () {
		return(
			<button 
				className='ClearButton' 
				type='reset'
				onClick={this.props.onClick}>
				{this.props.name}
		</button>
		)
	}
}

export default ClearButton;