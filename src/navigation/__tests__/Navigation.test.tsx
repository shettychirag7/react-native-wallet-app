import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import MainStackNavigation from '../MainStackNavigation';
import {NavigationContainer} from '@react-navigation/native';

describe('Navigation test', () => {
  it('should render home screen by default', () => {
    const {getByText} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    expect(getByText('Home!')).toBeDefined();
  });

  it('should render buy screen on click buy tab', () => {
    const {getByText, getAllByTestId} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    fireEvent.press(getAllByTestId('icon_storefront')[0]);

    expect(getByText('Buy!')).toBeDefined();
  });

  it('should render transaction screen on click payments tab', () => {
    const {getByText, getAllByTestId} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    fireEvent.press(getAllByTestId('icon_payments')[0]);

    expect(getByText('Transactions!')).toBeDefined();
  });

  it('should render profile screen on click person tab', () => {
    const {getByText, getAllByTestId} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    fireEvent.press(getAllByTestId('icon_person')[0]);

    expect(getByText('Profile!')).toBeDefined();
  });
});
