import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
const { act } = require('react-dom/test-utils');

const Hello = props => {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
};

const NextButton = props => {
  return (
    <button name="buttonNext" disabled="false">
      Next
    </button>
  );
};

describe('Fist Smoke test', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div', {}, NextButton);
    // container.appendChild(NextButton);
    // document.body.appendChild(NextButton);
    document.body.appendChild(container);
    console.log('Document: ' + document.body.outerHTML);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('tes1', () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hey, stranger');
  });
});
