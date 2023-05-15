import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Screens from '../../../navigation/Screens';
import R from '../../../assets';
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

    expect(getByText(R.strings.notifications.link)).toBeDefined();
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

    fireEvent.press(getByText(R.strings.notifications.link));

    expect(navigateMock).toHaveBeenCalledWith(Screens.Notification);
  });
});
