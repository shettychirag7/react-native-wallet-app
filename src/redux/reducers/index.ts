import {transactionSlice} from './transactions';

export default {
  [transactionSlice.name]: transactionSlice.reducer,
};
