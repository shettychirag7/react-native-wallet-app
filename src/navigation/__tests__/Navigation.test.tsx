import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render} from '@testing-library/react-native';
import {renderWithStore, waitFor} from 'utils/tests';

import R from '../../assets';

import MainStackNavigation from '../MainStackNavigation';

describe('Navigation test', () => {
  it('should render home screen by default', () => {
    const {getByText} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    expect(getByText(R.strings.home.title)).toBeDefined();
  });

  it('should render buy screen on click buy tab', () => {
    const {getByText, getAllByTestId} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    fireEvent.press(getAllByTestId('icon_storefront')[0]);

    expect(getByText(R.strings.buy.title)).toBeDefined();
  });

  it('should render transaction screen on click payments tab', async () => {
    const {getByText, getAllByTestId} = renderWithStore(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
      {},
    );

    fireEvent.press(getAllByTestId('icon_payments')[0]);

    await waitFor(() => {
      expect(getByText(R.strings.transactions.title)).toBeDefined();
    });
  });

  it('should render profile screen on click person tab', () => {
    const {getByText, getAllByTestId} = render(
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>,
    );

    fireEvent.press(getAllByTestId('icon_person')[0]);

    expect(getByText(R.strings.profile.title)).toBeDefined();
  });
});
