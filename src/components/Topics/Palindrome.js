import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if (forwards === backwards) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input
          onChange={e => this.handleChange(e.target.value)}
          className='inputLine'
        ></input>
        <button
          onClick={() => this.isPalindrome(this.state.userInput)}
          className='confirmationButton'
        >
          Is Palindrome?
        </button>
        <span className='resultsBox'>{this.state.palindrome}</span>
      </div>
    );
  }
}
