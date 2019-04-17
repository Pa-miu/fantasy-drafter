import React, { Component } from 'react';
import Select from 'react-select';

class MultiSelect extends Component {
	handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

	render() {
		return(
			<div id={this.props.gridpos} className='MultiSelect'>
				{this.props.name}
				<Select
					isMulti
					onChange = {this.handleChange}
					options = {this.props.options}
				/>
			</div>
		)
	}
}

export default MultiSelect;