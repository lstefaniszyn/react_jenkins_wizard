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

    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    jest.resetModules();
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Smoke test - Render Step One', () => {
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

  it('Step One - waiting to load templates', () => {
    act(() => {
      render(
        <div>
          <NextButton />
          <StepOne />
        </div>,
        container
      );
    });
    //Template list is still loading.
    expect(document.querySelector('.load-status').textContent).toBe(
      'Loading ...'
    );

    //It is in loading phase, therefor NextButton has to be disabled
    expect(document.querySelector('button#buttonNext').disabled).toBe(true);
  });

  it('Step One - real list of templates', async () => {
    //mock
    // const [templateNames, isError, isLoading] = useGetTemplates();

    // import { useGetTemplates } from './stepOne/ComponentTemplateForm';
    // const { useGetTemplates } = require('./stepOne/ComponentTemplateForm');
    // jest.mock('useGetTemplates');
    // const resp = { name: 'John_2' };

    const useGetTemplates = jest.fn();

    useGetTemplates.mockReturnValue([], true, false);


// foo.js
module.exports = function() {
  // some implementation;
};

// test.js
jest.mock('./stepOne/ComponentTemplateForm'); // this happens automatically with automocking
const foo = require('../foo');

// foo is a mock function
foo.mockImplementation(() => 42);
foo();





    act(() => {
      render(
        <div>
          <NextButton />
          <StepOne />
        </div>,
        container
      );
    });

    //Template list is still loading.
    expect(document.querySelector('.load-status').textContent).toBe(
      'Loading ...'
    );

    //It is in loading phase, therefor NextButton has to be disabled
    expect(document.querySelector('button#buttonNext').disabled).toBe(true);

    console.log('Document_3: ' + document.body.outerHTML);
  });
});
