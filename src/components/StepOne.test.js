import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import StepOne from './StepOne';
const { act } = require('react-dom/test-utils');

let container = null;

class NextButton extends React.Component {
  render() {
    return (
      <button name="buttonNext" disabled="false">
        Next
      </button>
    );
  }
}

beforeEach(() => {
  // setup a DOM element as a render target
  var nextButtonElement = React.createElement(
    'button',
    {
      id: 'buttonNext',
      style: {
        display: 'none'
      }
    },
    'Next'
  );
  container = document.createElement('div', {}, [nextButtonElement]);
  // container.appendChild(NextButton);
  // console.log('Container:' + container.outerHTML);
  // document.body.appendChild(container);
  // console.log('Document:' + document.outerHTML);
  // var ele = document.getElementById('buttonNext');
  // console.log(ele.textContent);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Smoke - start StepOne', async () => {
  // act(() => {
  //   render(<StepOne />, container);
  // });
});
