import React, { Component } from 'react';

export class StatefulCounter extends Component {
  state = {
    count: 0,
    number: 2
  };

  number = 1;

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <div>
          Clicked {this.state.count} times{' '}
          <button onClick={this.increment}>+1</button>
        </div>
        <div>And number is {this.state.number} </div>
        <div>Text is {this.number} </div>
      </div>
    );
  }
}
