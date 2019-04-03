import React, { Component } from 'react';

class Placeholder extends Component {
	render() {
		return(
			<div className="Placeholder">
				{this.props.name}
				<br/>
				{this.props.feature}
			</div>
		);
	}
}

export default Placeholder;