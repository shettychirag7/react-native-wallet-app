import React from 'react';
import {renderWithStore, waitFor} from 'utils/tests';

import Notifications from '..';
import {fireEvent} from '@testing-library/react-native';

describe('Notifications screen tests', () => {
  it('should render transaction list', async () => {
    const {getByText} = renderWithStore(
      <Notifications navigation={{navigate: jest.fn()} as any} />,
      {},
    );
    await waitFor(() => {
      expect(
        getByText('Unread notification - Transaction ID T100'),
      ).toBeDefined();
      expect(
        getByText('Unread notification - Transaction ID T300'),
      ).toBeDefined();
    });
  });

  it('should navigate to transaction details screen with id', async () => {
    const navigationMock = jest.fn();
    const {getByText} = renderWithStore(
      <Notifications navigation={{navigate: navigationMock} as any} />,
      {},
    );
    await waitFor(() => {
      fireEvent.press(getByText('Unread notification - Transaction ID T300'));
    });
    expect(navigationMock).toHaveBeenCalledWith('TransactionDetails', {
      txnId: 'T300',
    });
  });
});
