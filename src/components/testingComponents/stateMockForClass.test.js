import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { StateMock } from '@react-mock/state';
import { StatefulCounter } from './stateMockForClass';

//REMARK: It works only with Class structures.  No useState()

const renderComponent = ({ count, number }) =>
  render(
    <StateMock state={{ count, number }}>
      <StatefulCounter />
    </StateMock>
  );

it('renders initial count', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText, container } = renderComponent({ count: 5, number: 2 });

  console.log(container.innerHTML.toString());

  await waitForElement(() => getByText(/clicked 5 times/i));
});

it('increments count', async () => {
  // Render new instance in every test to prevent leaking state
  const { getByText } = renderComponent({ count: 5 });

  fireEvent.click(getByText('+1'));
  await waitForElement(() => getByText(/clicked 6 times/i));
});
