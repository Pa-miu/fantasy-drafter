import React, { Component } from 'react';
import SingleInput from './SingleInput.js'
import MultiSelect from './MultiSelect.js'
import Placeholder from './Placeholder.js'

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
      	<MultiSelect gridpos={'ExcludePitch'} name={'Exclude Pitchers From'} />
      	<MultiSelect gridpos={'ExcludeHit'} name={'Exclude Hitters From'} />
      	<Placeholder gridpos={'MaxLineupsCombo'} name={'Max Lineups per Combo'} feature={'checkbox or dropdown boolean'}/>
      	<Placeholder gridpos={'UseExposure'} name={'Use Exposures'} feature={'checkbox or dropdown boolean'}/>
				<Placeholder gridpos={'HitterExposure'} name={'Hitter Exposures'} feature={'Chosen-JS multiple select team list'}/>
      </div>
    );
  }
}

export default App;