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
  container = document.createElement('div');
  document.body.appendChild(container);
  let btn = document.createElement('BUTTON');
  btn.innerHTML = 'Next';
  btn.id = 'buttonNext';
  btn.setAttribute('disabled', 'false');
  container.appendChild(btn);
  // container.appendChild(NextButton);
  console.log('Container_1:' + container.outerHTML);
  console.log('Document_1: ' + document.body.outerHTML);
  // var ele = document.getElementById('buttonNext');
  // console.log(document);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Smoke - start StepOne', async () => {
  act(() => {
    render(<StepOne />, container);
  });
});
