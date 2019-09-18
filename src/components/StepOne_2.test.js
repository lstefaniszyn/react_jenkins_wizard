import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
const { act } = require('react-dom/test-utils');

const Hello = props => {
  // let el = document.getElementById('buttonNext');
  // console.log('Exists_2: ' + el.id);
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <span>Hey, stranger</span>;
  }
};

const NextButton = props => {
  return (
    <button name="buttonNext" disabled={false}>
      NextButton
    </button>
  );
};

describe('Fist Smoke test', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('DIV');
    document.body.appendChild(container);
    let btn = document.createElement('BUTTON');
    btn.innerHTML = 'Next';
    btn.id = 'buttonNext';
    btn.setAttribute('disabled', 'false');
    container.appendChild(btn);
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
    act(() => {
      // let el = document.getElementById('buttonNext');
      // console.log('Exists: ' + el.id);
      render(
        <div>
          <NextButton />
          <Hello />
        </div>,
        container
      );
      // render(, container);
    });
    console.log('Document_2: ' + document.body.outerHTML);
    // expect(container.textContent).toBe('Hey, stranger');
  });
});
