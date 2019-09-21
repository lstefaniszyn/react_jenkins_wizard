import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
const { act } = require('react-dom/test-utils');
import StepOne from './StepOne';
import { nextButton } from './commonActions';

const Hello = props => {
  console.log('Document_Hello: ' + document.body.outerHTML);
  let el = document.getElementById('buttonNext');
  console.log('Exists_2: ' + el.id);
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
};

const NextButton = props => {
  return (
    <button id="buttonNext" disabled={true}>
      NextButton
    </button>
  );
};

describe('Fist Smoke test', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    // container = document.createElement('DIV');
    container = document.createElement('BUTTON');
    container.innerHTML = 'Next';
    container.id = 'buttonNext';
    container.setAttribute('disabled', 'false');
    // container.disabled = true;

    // container.appendChild(btn);

    document.body.appendChild(container);
    // ReactDOM.render(element, container[, callback])

    // container.appendChild(NextButton);
    // document.body.appendChild(NextButton);
    console.log('Document: ' + document.body.outerHTML);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('tes1', () => {
    // let el = document.getElementById('buttonNext');
    // console.log('Exists: ' + el.id);
    // act(() => {
    //   render(<NextButton />, container);
    // });
    console.log('Document_1: ' + document.body.outerHTML);

    act(() => {
      render(<StepOne />, container);
    });
    console.log('Document_2: ' + document.body.outerHTML);
    // expect(container.textContent).toBe('Hey, stranger');
  });
});
