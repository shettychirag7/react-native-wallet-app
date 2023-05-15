import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import R from '../../../assets';

import Screen from '../../../navigation/Screens';
import Home from '../';

describe('Home screen tests', () => {
  it('should render correctly', () => {
    const {getByText} = render(
      <Home
        navigation={
          {
            navigate: jest.fn(),
          } as any
        }
      />,
    );

    expect(getByText(R.strings.notifications.link)).toBeDefined();
  });

  it('should navigate to notifications screen', () => {
    const navigateMock = jest.fn();
    const {getByText} = render(
      <Home
        navigation={
          {
            navigate: navigateMock,
          } as any
        }
      />,
    );

    fireEvent.press(getByText(R.strings.notifications.link));

    expect(navigateMock).toHaveBeenCalledWith(Screen.Notification);
  });
});
