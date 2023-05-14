export type TransactionDto = {
  transactions: {
    id: string;
    notification_read: boolean;
  }[];
};

export interface TransactionService {
  getAll: () => Promise<TransactionDto>;
}

export interface TransactionService {
  getAll: () => Promise<TransactionDto>;
}

export interface TransactionConstructor {
  new (): TransactionService;
}
