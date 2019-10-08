import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { StateMock } from '@react-mock/state';
import { StatefulCounter } from './StatefulCounter';

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ count, number }) =>
  render(
    <StateMock state={{ count, number }} number={{ i: 2 }}>
      <StatefulCounter />
    </StateMock>
  );

it('renders initial count', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText, container } = renderComponent({ count: 5, number: 2 });

  console.log(container.innerHTML.toString());

  await waitForElement(() => getByText(/clicked 5 times/i));
  await waitForElement(() => getByText(/and number is 2/i));
  await waitForElement(() => getByText(/text is 2/i));
});

it('increments count', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ count: 5 });

  fireEvent.click(getByText('+1'));
  await waitForElement(() => getByText(/clicked 6 times/i));
});
