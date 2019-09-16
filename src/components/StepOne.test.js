import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import StepOne from './StepOne';
const { act } = require('react-dom/test-utils');

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  var nextButtonElement = React.createElement(
    'button',
    { id: 'buttonNext', disabled: false },
    'Next'
  );
  container = document.createElement('div', {}, [nextButtonElement]);
  document.body.appendChild(container);
  console.log(document.);
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
