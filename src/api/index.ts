import createTransactionService from './transactions';

import {TransactionService} from './transactions/interface';

export type Services = {
  transactions: TransactionService;
};

/**
 * @param {boolean} injectMocks Pass as true if you want to run the app with mock data
 * Default is false
 */
export default (injectMocks = false): Services => ({
  transactions: createTransactionService(injectMocks),
});
