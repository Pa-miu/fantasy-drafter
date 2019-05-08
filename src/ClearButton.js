import React, { Component } from 'react';

class ClearButton extends Component {
	render () {
		return(
			<button className='ClearButton' type='button'>{this.props.name}</button>
		)
	}
}

export default ClearButton;