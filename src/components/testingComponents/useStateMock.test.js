import { useCounter } from './useStateMock';
import { useMyHook } from './useMyHook';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  useState: initial => [initial, mockSetState]
}));

jest.mock('./useMyHook', () => ({
  useMyHook: () => [1, 2, 3]
}));

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

test('check custom Hook', () => {
  const [value1, value2, value3] = useMyHook();
  console.log([value1, value2, value3]);
  expect([value1, value2, value3]).toEqual([1, 2, 3]);
});

test('check custom Hook with Mock', () => {
  const [value1, value2, value3] = useMyHook();
  // expect([value1, value2, value3]).toBe([1, 2, 3]);
});
