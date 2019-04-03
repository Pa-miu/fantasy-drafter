import React, { Component } from 'react';
import SingleInput from './SingleInput.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>fantasy drafter</h1>
        <SingleInput id={'minsal'} name={'Minimum Salary'} placeholder={34000} />
        <SingleInput id={'maxsal'} name={'Maximum Salary'} placeholder={35000} />
      </div>
    );
  }
}

export default App;