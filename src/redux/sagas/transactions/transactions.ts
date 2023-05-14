import {TransactionDto, TransactionService} from 'api/transactions/interface';
import {getContext, call, put, takeLatest} from 'redux-saga/effects';

import {
  onGetTransactionsError,
  setTransactions,
  getAllTransactions as getAll,
} from '../../reducers/transactions';

function* getAllTransactions() {
  try {
    const transactionService: TransactionService = yield getContext(
      'transactions',
    );
    const data: TransactionDto = yield call(transactionService.getAll);
    yield put(setTransactions(data.transactions));
  } catch (e: any) {
    yield put(onGetTransactionsError(e?.message || 'fetch data error'));
  }
}

export function* transactionsSaga() {
  yield takeLatest(getAll, getAllTransactions);
}
