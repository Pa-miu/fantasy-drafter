import React, { Component } from 'react';
import Select from 'react-select';

const customstyle = {
	control: (provided, { isFocused }) => { 
		return {
			...provided, 
			'&:hover' : {borderColor: '#4997e5'},
			backgroundColor: '#191f21', 
			borderColor: 
				isFocused ? 
					'#4997e5' : '#4b4d4f',
			boxShadow: 'none'
		};
	},
	option: (provided, { isFocused }) => {
		return {
			...provided,
			backgroundColor: isFocused ? '#5489d8' : null,
			color: isFocused ? '#dceded' : null
		};
	},
	menu: provided => ({...provided, backgroundColor: '#191f21' }),
	multiValue: provided => ({...provided, backgroundColor: '#4997e5'}),
	multiValueLabel: provided => ({...provided, color: '#dceded'})
}

class MultiSelect extends Component {
	render() {
		return(
			<div id={this.props.gridpos} >
				{this.props.name}
				<Select
					closeMenuOnSelect={false}
					isMulti
					options = {this.props.options}
					styles = {customstyle}
				/>
			</div>
		)
	}
}

export default MultiSelect;