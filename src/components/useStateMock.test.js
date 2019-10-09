import { useCounter } from './useStateMock';

const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: initial => [initial, mockSetState]
}));

test('Can increment from 1 to 2', () => {
  const [_, increment] = useCounter(1);

  increment();

  expect(mockSetState).toHaveBeenCalledWith(2);
});
