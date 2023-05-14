import React from 'react';
import {renderWithStore, waitFor} from 'utils/tests';

import Transactions from '..';

describe('Transactions screen tests', () => {
  it('should render transaction list', async () => {
    const {getByText} = renderWithStore(<Transactions />, {});
    await waitFor(() => {
      expect(getByText('Transaction T100')).toBeDefined();
      expect(getByText('Transaction T200')).toBeDefined();
      expect(getByText('Transaction T300')).toBeDefined();
    });
  });
});
