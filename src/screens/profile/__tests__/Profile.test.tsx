import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Profile from '../';

describe('Profile screen tests', () => {
  it('should render correctly', () => {
    const {getByText} = render(
      <Profile
        navigation={
          {
            navigate: jest.fn(),
          } as any
        }
      />,
    );

    expect(getByText('Go to notifications')).toBeDefined();
  });

  it('should navigate to notifications screen', () => {
    const navigateMock = jest.fn();
    const {getByText} = render(
      <Profile
        navigation={
          {
            navigate: navigateMock,
          } as any
        }
      />,
    );

    fireEvent.press(getByText('Go to notifications'));

    expect(navigateMock).toHaveBeenCalledWith('Notification');
  });
});
