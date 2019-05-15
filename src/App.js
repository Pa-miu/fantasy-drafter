import React, { Component } from 'react';
import CheckboxInput from './CheckboxInput.js'
import ClearButton from './ClearButton.js'
import FileDrop from './FileDrop.js'
import ModularSelect from './ModularSelect.js'
import MultiSelect from './MultiSelect.js'
import SearchButton from './SearchButton.js'
import SingleInput from './SingleInput.js'
import { teamoptions } from './data.js'

class App extends Component {
	handleDrop = (file) => {
		console.log(file[0].name);
	}

  render() {
    return (
      <div className='App'>
        <div className='Header'><h1>fantasy drafter</h1></div>
      	<FileDrop 
      		name={'Projection File'}
      		dropmessage={'Drop Here'}
      		handleDrop={this.handleDrop}
      	/>
      	<ClearButton name={'Clear'}/>
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
      	<SingleInput 
      		inputId={'maxlineups'} 
      		name={'Max Lineups per Combo'} 
      		placeholder={9} 
      	/>
      	<CheckboxInput 
      		inputId={'useexp'}
      		name={'Use Exposures'}
      		checked
      	/>
      	<ModularSelect
      		name={'Hitter Exposures'}
      		options={teamoptions} 
      	/>
      	<SearchButton name={'Search'}/>
      </div>
    );
  }
}

export default App;