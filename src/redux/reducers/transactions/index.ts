import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TransactionDto} from '../../../api/transactions/interface';

export type TransactionList = TransactionDto['transactions'];

export interface TransactionsState {
  loading: boolean;
  transactions: TransactionList;
  error?: string;
}

const initialState: TransactionsState = {
  loading: false,
  transactions: [],
  error: '',
};

/**
 * redux toolkit uses immer.js behind the scenes
 * so mutable code is auto converted to immutable code
 */
export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getAllTransactions: state => {
      state.loading = true;
      state.error = '';
    },
    setTransactions: (state, {payload}: PayloadAction<TransactionList>) => {
      state.loading = false;
      state.transactions = payload;
    },
    onGetTransactionsError: (state, {payload}: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const {getAllTransactions, setTransactions, onGetTransactionsError} =
  transactionSlice.actions;
