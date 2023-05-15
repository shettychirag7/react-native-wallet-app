import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

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

    expect(getByText('Go to Notifications')).toBeDefined();
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

    fireEvent.press(getByText('Go to Notifications'));

    expect(navigateMock).toHaveBeenCalledWith('Notification');
  });
});
