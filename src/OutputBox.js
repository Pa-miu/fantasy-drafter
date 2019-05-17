import React, { Component } from 'react';

class OutputBox extends Component {
	render() {
		return (
			<div className='OutputBox'>
				{this.props.output}
			</div>
		);
	}
}

export default OutputBox;