import {
  TransactionService as ItransactionService,
  TransactionConstructor,
} from './interface';
import mockData from '../mocks/transactions.json';

class TransactionService implements ItransactionService {
  /**
   * actual api can be called here
   */
  getAll = () => {
    return Promise.resolve(undefined as any);
  };
}

class TransactionServiceMock implements ItransactionService {
  getAll = () => {
    return Promise.resolve(mockData);
  };
}

const createTransactionService = (
  ctor: TransactionConstructor,
): TransactionService => {
  return new ctor();
};

/**
 * @param {boolean} mockEnabled
 * Pass true to return mock implementation of api which returns a mock data
 * @returns {TransactionService} service object with methods to get data
 */
export default (mockEnabled: boolean) =>
  createTransactionService(
    mockEnabled ? TransactionServiceMock : TransactionService,
  );
