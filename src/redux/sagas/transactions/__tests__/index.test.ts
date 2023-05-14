import {expectSaga} from 'redux-saga-test-plan';
import {getContext} from 'redux-saga-test-plan/matchers';

import mockData from '../../../../api/mocks/transactions.json';
import {
  onGetTransactionsError,
  setTransactions,
  getAllTransactions,
} from '../../../reducers/transactions';
import {transactionsSaga} from '../transactions';

describe('Load transactions', () => {
  it('should load all transactions', () => {
    const getAll = () => Promise.resolve(mockData);
    return expectSaga(transactionsSaga)
      .provide([[getContext('transactions'), {getAll}]])
      .getContext('transactions')
      .put(setTransactions(mockData.transactions))
      .dispatch(getAllTransactions())
      .run();
  });

  it('should set error when fetch transaction fails', () => {
    const getAll = () => Promise.reject({message: 'fetch fail'});
    return expectSaga(transactionsSaga)
      .provide([[getContext('transactions'), {getAll}]])
      .getContext('transactions')
      .put(onGetTransactionsError('fetch fail'))
      .dispatch(getAllTransactions())
      .run();
  });
});
