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
    container = document.createElement('DIV');
    // let btn = document.createElement('BUTTON');
    // btn.innerHTML = 'Next';
    // btn.id = 'buttonNext';
    // btn.setAttribute('disabled', 'false');
    // container.appendChild(btn);

    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('tes1', () => {
    console.log('Document_1: ' + document.body.outerHTML);

    act(() => {
      render(
        <div>
          <NextButton />
          <StepOne />
        </div>,
        container
      );
    });
    console.log('Document_2: ' + document.body.outerHTML);
  });
});
