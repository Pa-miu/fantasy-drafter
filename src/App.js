import React, { Component } from 'react';
import CheckboxInput from './CheckboxInput.js'
import ClearButton from './ClearButton.js'
import FileDrop from './FileDrop.js'
import OutputBox from './OutputBox.js'
import ModularSelect from './ModularSelect.js'
import MultiSelect from './MultiSelect.js'
import SearchButton from './SearchButton.js'
import SingleInput from './SingleInput.js'
import { teamoptions } from './data.js'

class App extends Component {
  state = {
    minsal: '',
    maxsal: '',
    explineups: '',
    minplyrdiff: '',
    maxlineups: '',
    useexp: true,
    output: 'no output',
  }

	handleDrop = file => {
    this.setState({output: file[0].name});
	}

  handleInputChange = e => {
    const target = e.target;
    const targetId = target.getAttribute('id');
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[targetId]: value});
    console.log(targetId);
    console.log(value);
  }

  handleClear = e => {
    e.preventDefault();
    console.log('cleared');
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  }

  render() {
    return (
      <form className='App' onSubmit={this.handleSubmit}>
        <div className='Header'><h1>fantasy drafter</h1></div>
      	<FileDrop 
      		name={'Projection File'}
      		dropmessage={'Drop Here'}
      		handleDrop={this.handleDrop}/>
      	<ClearButton 
          name={'Clear'}
          onClick={this.handleClear}/>
      	<SingleInput 
      		inputId={'minsal'} 
      		name={'Minimum Salary'} 
          placeholder={34000} 
          onChange={this.handleInputChange}
          value={this.state.minsal}/>
      	<SingleInput 
      		inputId={'maxsal'} 
      		name={'Maximum Salary'} 
          placeholder={35000} 
          onChange={this.handleInputChange}
          value={this.state.maxsal}/>
      	<SingleInput 
      		inputId={'explineups'} 
      		name={'Number of Lineups'} 
          placeholder={100} 
          onChange={this.handleInputChange}
          value={this.state.explineups}/>
      	<SingleInput 
      		inputId={'minplyrdiff'} 
      		name={'Minimum Player Difference Between Lineups'}
          placeholder={3}
          onChange={this.handleInputChange} 
          value={this.state.minplyrdiff}/>
      	<MultiSelect 
	      	name={'Exclude Pitchers From'} 
	      	options={teamoptions}/>
      	<MultiSelect 
	      	name={'Exclude Hitters From'} 
	      	options={teamoptions}/>
      	<SingleInput 
      		inputId={'maxlineups'} 
      		name={'Max Lineups per Combo'} 
      		placeholder={9}
          onChange={this.handleInputChange}  
          value={this.state.maxlineups}/>
      	<CheckboxInput 
          checked={this.state.useexp}
      		inputId={'useexp'}
      		name={'Use Exposures'}
          onChange={this.handleInputChange}/>
      	<ModularSelect
      		name={'Hitter Exposures'}
      		options={teamoptions}/>
      	<SearchButton name={'Search'}/>
        <OutputBox output={this.state.output}/>
      </form>
    );
  }
}

export default App;