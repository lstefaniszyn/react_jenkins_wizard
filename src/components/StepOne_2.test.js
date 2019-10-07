import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { unmountComponentAtNode } from 'react-dom';

import StepOne from './StepOne';
import { nextButton } from './commonActions';
import { useGetTemplates } from './stepOne/useGetTemplates';

/* 
We should use standard React Test Library 
https://github.com/testing-library/react-testing-library#installation

Suppressing unnecessary warnings on React DOM 16.8 - https://github.com/testing-library/react-testing-library#suppressing-unnecessary-warnings-on-react-dom-168
There is a known compatibility issue with React DOM 16.8 where you will see the following warning:
Warning: An update to ComponentName inside a test was not wrapped in act(...).


OR 


We use Enzyme https://airbnb.io/enzyme/
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. 
*/

//TODO : decide either testing-library/react  OR  Enzyme
/* ReactTestUtils gives you the bare minimum to test a React component. I haven't seen it being used for big applications.

Enzyme and react-testing-library are both good libraries that give you all the tools you need to test your application. They have two different philosophies though.

Enzyme allows you to access the internal workings of your components. You can read and set the state, and you can mock children to make tests run faster.

On the other hand, react-testing-library doesn't give you any access to the implementation details. It renders the components and provides utility methods to interact with them. The idea is that you should communicate with your application in the same way a user would. So rather than set the state of a component you reproduce the actions a user would do to reach that state. 
*/

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

  beforeAll(() => {
    jest.mock('./stepOne/useGetTemplates');
  });

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('DIV');
    document.body.appendChild(container);

    //Node.js and Jest will cache modules you require. To test modules with side effects you’ll need to reset the module registry between tests
    jest.resetModules();
  });

  afterAll(() => {
    jest.unmock('./stepOne/useGetTemplates');
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });


const renderStepOne = (() => {
  render(
    <div>
      <NextButton />
      <StepOne />
    </div>,
    container
  );
});

  test('Smoke test - Render Step One ', async() => {
    // https://testing-library.com/docs/dom-testing-library/api-queries
    // https://react-testing-examples.com/jest-rtl/
    // https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples

    //TODO:  https://github.com/testing-library/react-testing-library#installation
    
    const { getByText } = renderStepOne();
    await waitForElement(() =>   getByText(/Loading .../));
    console.log('Document_2: ' + document.body.outerHTML);
  });

  test('Step One - waiting to load templates', async() => {
    let templateNames = { name: 'Hello' };
    let isError = true;
    let isLoading = false;

    const { useGetTemplates } = require('./stepOne/useGetTemplates');

    useGetTemplates.mockReturnValue([templateNames, isError, isLoading]);

    await waitForElement(() =>   getByText(container, /Something went wrong with getting Templates..../));
    console.log('Document_3: ' + document.body.outerHTML);

    //Template list is still loading.
    // expect(document.querySelector('.load-status').textContent).toBe(
    //   'Loading ...'
    );

    //It is in loading phase, therefor NextButton has to be disabled
    expect(document.querySelector('button#buttonNext').disabled).toBe(true);
  });

  test('Step One - check default status of useGetTemplates  ', () => {
    const { result } = renderHook(() => useGetTemplates());
    const [templateNames, isError, isLoading] = result.current;
    expect(isError).toBe(false);

    // const { result } = renderHook(() => useGetTemplates());

    // const [templateNames, isError, isLoading] = useGetTemplates();
    // expect(templateNames).toEqual([]);
    // expect(isError).toEqual(false);
    // expect(isLoading).toEqual(false);
  });

  test('Step One - real list of templates  ', async () => {
    //mock
    // const [templateNames, isError, isLoading] = useGetTemplates();
    // jest.mock('./stepOne/useGetTemplates');

    // [templateNames, isError, isLoading] = useGetTemplates();
    // useGetTemplates.mockReturnValue(['test1', 'test2'], false, false);

    // import { useGetTemplates } from './stepOne/ComponentTemplateForm';
    // const { useGetTemplates } = require('./stepOne/ComponentTemplateForm');
    // jest.mock('useGetTemplates');
    // const resp = { name: 'John_2' };

    // const useGetTemplates = jest.fn();

    // useGetTemplates.mockReturnValue([], true, false);

    // foo.js
    // module.exports = function() {
    //   // some implementation;
    // };

    // test.js
    // jest.mock('./stepOne/ComponentTemplateForm'); // this happens automatically with automocking
    // const foo = require('../foo');

    // // foo is a mock function
    // foo.mockImplementation(() => 42);
    // foo();

    render(
      <div>
        <NextButton />
        <StepOne />
      </div>,
      container
    );

    //Template list is still loading.
    expect(document.querySelector('.load-status').textContent).toBe(
      'Loading ...'
    );

    //It is in loading phase, therefor NextButton has to be disabled
    expect(document.querySelector('button#buttonNext').disabled).toBe(true);

    console.log('Document_3: ' + document.body.outerHTML);
  });
});
