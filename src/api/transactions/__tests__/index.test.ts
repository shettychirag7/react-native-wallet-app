import createTransactionService from '../';

import mockData from '../../mocks/transactions.json';

describe('TransactionService: getAll', () => {
  /**
   * update this test by mocking actual api and assert return value
   */
  it('returns api data when mock is disabled', async () => {
    const api = createTransactionService(false);
    const data = await api.getAll();
    expect(data).toEqual(undefined);
  });

  it('returns mock data when mock is enabled', async () => {
    const api = createTransactionService(true);
    const data = await api.getAll();
    expect(data).toEqual(mockData);
  });
});
