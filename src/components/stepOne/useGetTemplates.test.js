import { renderHook } from '@testing-library/react-hooks';
import { useGetTemplates } from './useGetTemplates';

/* How to test Hooks - https://react-hooks-testing-library.com/usage/basic-hooks  */
test('should use useGetTemplates', () => {
  const { result } = renderHook(() => useGetTemplates());

  const [templateNames, isError, isLoading] = result.current;
  expect(isLoading).toBe(true);
  expect(isError).toBe(false);
  expect(templateNames).toStrictEqual([]);
  // expect(typeof result.current.increment).toBe('function');
});
