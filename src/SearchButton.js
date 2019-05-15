import React, { Component } from 'react';

class SearchButton extends Component {
	render () {
		return(
			<button className='SearchButton' type='button'>{this.props.name}</button>
		)
	}
}

export default SearchButton;