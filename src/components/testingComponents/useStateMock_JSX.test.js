import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Example } from './useStateMock';

jest.mock('./useMyHook', () => ({
  useMyHook: () => [1, 2, 3]
}));

beforeAll(() => {});

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  jest.clearAllMocks();
  jest.unmock();
});

test('Check mock Hook in JSX element', async () => {
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
