import React, { Component } from 'react';
import Select from 'react-select';

const options = [
	{value: 'CHC', label: 'CHC'},
	{value: 'CHW',	label: 'CHW'},
	{value: 'CIN',	label: 'CIN'},
	{value: 'CLE',	label: 'CLE'},
	{value: 'COL',	label: 'COL'},
	{value: 'DET',	label: 'DET'},
	{value: 'HOU',	label: 'HOU'},
	{value: 'KC',		label: 'KC'},
	{value: 'LAA',	label: 'LAA'},
	{value: 'LAD',	label: 'LAD'},
	{value: 'MIA',	label: 'MIA'},
	{value: 'MIL',	label: 'MIL'},
	{value: 'MIN',	label: 'MIN'},
	{value: 'NYM',	label: 'NYM'},
	{value: 'NYY',	label: 'NYY'},
	{value: 'OAK',	label: 'OAK'},
	{value: 'PHI',	label: 'PHI'},
	{value: 'PIT',	label: 'PIT'},
	{value: 'SD',		label: 'SD'},
	{value: 'SEA',	label: 'SEA'},
	{value: 'SF',		label: 'SF'},
	{value: 'STL',	label: 'STL'},
	{value: 'TB',		label: 'TB'},
	{value: 'TEX',	label: 'TEX'},
	{value: 'TOR',	label: 'TOR'},
	{value: 'WAS',	label: 'WAS'}
]

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
					options = {options}
				/>
			</div>
		)
	}
}

export default MultiSelect;