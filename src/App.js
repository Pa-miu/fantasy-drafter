import React, { Component } from 'react';
import SingleInput from './SingleInput.js'
import MultiSelect from './MultiSelect.js'
import Placeholder from './Placeholder.js'
import { teamoptions } from './data.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id='Header'><h1>fantasy drafter</h1></div>
      	<Placeholder name={'Projection File'} feature={'load an external csv or use default'}/>
      	<Placeholder name={'Clear Button'} feature={'clear all fields'}/>
      	<SingleInput 
      		inputId={'minsal'} 
      		name={'Minimum Salary'} 
      		placeholder={34000} />
      	<SingleInput 
      		inputId={'maxsal'} 
      		name={'Maximum Salary'} 
      		placeholder={35000} />
      	<SingleInput 
      		inputId={'explineups'} 
      		name={'Number of Lineups'} 
      		placeholder={100} />
      	<SingleInput 
      		inputId={'minplyrdiff'} 
      		name={'Minimum Player Difference Between Lineups'} 
      		placeholder={3} />
      	<MultiSelect 
	      	name={'Exclude Pitchers From'} 
	      	options={teamoptions} 
      	/>
      	<MultiSelect 
	      	name={'Exclude Hitters From'} 
	      	options={teamoptions} 
      	/>
      	<Placeholder name={'Max Lineups per Combo'} feature={'checkbox or dropdown boolean'}/>
      	<Placeholder name={'Use Exposures'} feature={'checkbox or dropdown boolean'}/>
				<Placeholder name={'Hitter Exposures'} feature={'Chosen-JS multiple select team list'}/>
      </div>
    );
  }
}

export default App;