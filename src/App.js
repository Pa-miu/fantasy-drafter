import React, { Component } from 'react';
import SingleInput from './SingleInput.js'
import Placeholder from './Placeholder.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>fantasy drafter</h1>
        <div>
        	<Placeholder name={'PROJECTION FILE'} feature={'load an external csv'}/>
        </div>
        <div>
        	<SingleInput id={'minsal'} name={'Minimum Salary'} placeholder={34000} />
        	<SingleInput id={'maxsal'} name={'Maximum Salary'} placeholder={35000} />
        </div>
        <div>
        	<SingleInput id={'explineups'} name={'Number of Expected Lineups'} placeholder={100} />
        	<SingleInput id={'minplyrdiff'} name={'Minimum Player Difference Between Lineups'} placeholder={3} />
        </div>
        <div>
        	<Placeholder name={'Exclude Pitchers From'} feature={'Chosen-JS multiple select team list'}/>
        	<Placeholder name={'Exclude Hitters From'} feature={'Chosen-JS multiple select team list'}/>
        </div>
        <div>
        	<Placeholder name={'Max Lineups per Combo'} feature={'checkbox or dropdown boolean'}/>
        </div>
        <div>
        	<Placeholder name={'USE EXPOSURES'} feature={'checkbox or dropdown boolean'}/>
        </div>
        <div>
					<Placeholder name={'Hitter Exposures'} feature={'Chosen-JS multiple select team list'}/>
        </div>
      </div>
    );
  }
}

export default App;