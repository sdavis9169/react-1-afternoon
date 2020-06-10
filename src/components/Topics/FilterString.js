import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      names: ['steve', 'mike', 'matt', 'joe', 'colt', 'kristina', 'hank'],
      userInput: '',
      filteredArray: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];

    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.names)}</span>
        <input
          className='inputLine'
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        ></input>
        <button
          onClick={() => this.filterNames(this.state.userInput)}
          className='confirmationButton'
        >
          Filter
        </button>
        <span className='resultsBox filterStringPB'>
          Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
