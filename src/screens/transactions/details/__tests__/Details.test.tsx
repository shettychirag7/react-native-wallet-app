import React from 'react';

import TransactionDetails from '..';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Screen from '../../../../navigation/Screens';

describe('Transactions screen tests', () => {
  it('should render transaction list', async () => {
    const {getByText} = render(
      <TransactionDetails
        navigation={{navigate: jest.fn()} as any}
        route={{
          key: '',
          name: Screen.TransactionDetails,
          params: {
            txnId: 'T100',
          },
        }}
      />,
    );
    await waitFor(() => {
      expect(getByText('Transaction ID is T100')).toBeDefined();
    });
  });

  it('navigates back on press back button', () => {
    const goBackMock = jest.fn();
    const {getByTestId} = render(
      <TransactionDetails
        navigation={{goBack: goBackMock} as any}
        route={{
          key: '',
          name: Screen.TransactionDetails,
          params: {
            txnId: 'T100',
          },
        }}
      />,
    );

    fireEvent.press(getByTestId('back-button'));

    expect(goBackMock).toHaveBeenCalled();
  });
});
