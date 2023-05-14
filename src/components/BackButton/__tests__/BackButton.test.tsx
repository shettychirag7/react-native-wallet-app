import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import BackButton from '..';

describe('component: BackButton', () => {
  it('renders Back Button correctly', () => {
    const {toJSON} = render(<BackButton />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('on press button should execute callback', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <BackButton testID="back-button" onPress={onPressMock} />,
    );

    fireEvent.press(getByTestId('back-button'));

    expect(onPressMock).toHaveBeenCalled();
  });
});
