import React from 'react';
import {Button} from 'react-native';
import {
  act,
  fireEvent,
  render,
  waitForElement,
} from 'react-native-testing-library';
import App from '../App';

describe('form-validation', () => {
  it('displays errors when button is pressed', async () => {
    const component = render(<App />);

    await act(async () => {
      fireEvent.press(component.getByType(Button));
    });

    expect(
      await waitForElement(() => component.queryByText('This is required.')),
    ).toBeTruthy();
  });
});
