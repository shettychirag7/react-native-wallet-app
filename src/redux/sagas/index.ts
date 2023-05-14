import {all} from 'redux-saga/effects';
import {transactionsSaga} from './transactions/transactions';

export default function* rootSaga() {
  yield all([transactionsSaga()]);
}
