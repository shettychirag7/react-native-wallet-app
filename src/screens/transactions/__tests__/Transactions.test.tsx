import React from 'react';
import {renderWithStore, waitFor} from 'utils/tests';

import Transactions from '..';
import {fireEvent} from '@testing-library/react-native';

describe('Transactions screen tests', () => {
  it('should render transaction list', async () => {
    const {getByText} = renderWithStore(
      <Transactions navigation={{navigate: jest.fn()} as any} />,
      {},
    );
    await waitFor(() => {
      expect(getByText('Transaction T100')).toBeDefined();
      expect(getByText('Transaction T200')).toBeDefined();
      expect(getByText('Transaction T300')).toBeDefined();
    });
  });

  it('should navigate to transaction details screen with id', async () => {
    const navigationMock = jest.fn();
    const {getByText} = renderWithStore(
      <Transactions navigation={{navigate: navigationMock} as any} />,
      {},
    );
    await waitFor(() => {
      fireEvent.press(getByText('Transaction T100'));
    });
    expect(navigationMock).toHaveBeenCalledWith('TransactionDetails', {
      txnId: 'T100',
    });
  });
});
