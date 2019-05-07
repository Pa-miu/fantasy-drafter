import React, { Component } from 'react';
import Select from 'react-select';
import { modularselectstyle } from './data.js';

class ModularSelect extends Component {
	render() {
		return(
			<div id={this.props.gridpos} className='ModularSelect'>
				{this.props.name}
				<div className='ModularSelectRow'>
					<Select
						options = {this.props.options}
						styles = {modularselectstyle} />
					<input className='ModularSelectInput' placeholder='0.00'/>
					<button className='ModularSelectButton' type='button'>×</button>
				</div>
				<button className='ModularSelectButton GridCenter' type='button'>+</button>
			</div>
		)
	}
}

export default ModularSelect;