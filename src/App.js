import React, { Component } from 'react';
import SingleInput from './SingleInput.js'
import MultiSelect from './MultiSelect.js'
import Placeholder from './Placeholder.js'

const options = [
	{value: 'CHC',	label: 'CHC'},
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

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id='Header'><h1>fantasy drafter</h1></div>
      	<Placeholder gridpos={'Projection'} name={'Projection File'} feature={'load an external csv or use default'}/>
      	<Placeholder gridpos={'Clear'} name={'Clear Button'} feature={'clear all fields'}/>
      	<SingleInput 
      		gridpos={'MinSalary'}
      		inputId={'minsal'} 
      		name={'Minimum Salary'} 
      		placeholder={34000} />
      	<SingleInput 
      		gridpos={'MaxSalary'}
      		inputId={'maxsal'} 
      		name={'Maximum Salary'} 
      		placeholder={35000} />
      	<SingleInput 
      		gridpos={'NumExpectLineups'}
      		inputId={'explineups'} 
      		name={'Number of Lineups'} 
      		placeholder={100} />
      	<SingleInput 
      		gridpos={'MinPlayerDiff'}
      		inputId={'minplyrdiff'} 
      		name={'Minimum Player Difference Between Lineups'} 
      		placeholder={3} />
      	<MultiSelect 
	      	gridpos={'ExcludePitch'} 
	      	name={'Exclude Pitchers From'} 
	      	options={options} 
      	/>
      	<MultiSelect 
	      	gridpos={'ExcludeHit'} 
	      	name={'Exclude Hitters From'} 
	      	options={options} 
      	/>
      	<Placeholder gridpos={'MaxLineupsCombo'} name={'Max Lineups per Combo'} feature={'checkbox or dropdown boolean'}/>
      	<Placeholder gridpos={'UseExposure'} name={'Use Exposures'} feature={'checkbox or dropdown boolean'}/>
				<Placeholder gridpos={'HitterExposure'} name={'Hitter Exposures'} feature={'Chosen-JS multiple select team list'}/>
      </div>
    );
  }
}

export default App;