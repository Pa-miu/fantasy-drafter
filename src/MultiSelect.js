import React, { Component } from 'react';
import Select from 'react-select';
import { multiselectstyle } from './data.js'

class MultiSelect extends Component {
	render() {
		return(
			<div id={this.props.gridpos} >
				{this.props.name}
				<Select
					closeMenuOnSelect={false}
					isMulti
					options = {this.props.options}
					styles = {multiselectstyle}
				/>
			</div>
		)
	}
}

export default MultiSelect;