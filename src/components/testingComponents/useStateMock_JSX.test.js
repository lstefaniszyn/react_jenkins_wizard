import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

beforeAll(() => {});

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  jest.clearAllMocks();
  jest.unmock();
});

test('Check mock Hook in JSX element', async () => {
  jest.mock('./useMyHook', () => ({
    useMyHook: () => [1, 2, 3]
  }));

  const { Example } = require('./useStateMock');
  const { getByText } = render(
    <div>
      <Example />
    </div>
  );
  await waitForElement(() => getByText(/Your value1=1/));
  await waitForElement(() => getByText(/Your value2=2/));
  await waitForElement(() => getByText(/Your value3=3/));
  console.log('Document_2: ' + document.body.outerHTML);
});

test('Check mock Hook in JSX element_2', async () => {
  jest.mock('./useMyHook', () => ({
    useMyHook: () => [3, 4, 5]
  }));

  const { Example } = require('./useStateMock');
  const { getByText } = render(
    <div>
      <Example />
    </div>
  );
  await waitForElement(() => getByText(/Your value1=3/));
  await waitForElement(() => getByText(/Your value2=4/));
  await waitForElement(() => getByText(/Your value3=5/));
  console.log('Document_2: ' + document.body.outerHTML);
});
