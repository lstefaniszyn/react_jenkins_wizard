import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { useCounter, Example } from './useStateMock';

const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: initial => [initial, mockSetState]
}));

beforeAll(() => {});

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  jest.clearAllMocks();
  jest.unmock();
});

test('Can increment from 1 to 2', () => {
  const [_, increment] = useCounter(1);

  increment();

  expect(mockSetState).toHaveBeenCalledWith(2);
});

test('check custom Hook with Mock', () => {
  const { useMyHook } = require('./useMyHook');
  jest.mock('./useMyHook');
  useMyHook.mockReturnValue([3, 4, 5]);

  const [value1, value2, value3] = useMyHook();
  expect([value1, value2, value3]).toEqual([3, 4, 5]);
});

test('check custom Hook', () => {
  const { useMyHook } = require('./useMyHook');
  jest.mock('./useMyHook', () => ({
    useMyHook: () => [1, 2, 3]
  }));

  const [value1, value2, value3] = useMyHook();
  console.log([value1, value2, value3]);
  expect([value1, value2, value3]).toEqual([1, 2, 3]);
});

test('Check mock Hook in JSX element', async () => {
  const { useMyHook } = require('./useMyHook');
  jest.mock('./useMyHook');
  useMyHook.mockReturnValue([1, 2, 3]);

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
