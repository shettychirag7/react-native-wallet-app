import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import createApiServices from '../api';

import reducers from './reducers';
import sagas from './sagas';
import {TransactionsState} from './reducers/transactions';

export interface DefaultState {
  transactions?: TransactionsState;
}

type CreateStore = {
  /**
   * Intialise the store with default values
   */
  defaultState?: DefaultState;
  /**
   * Pass true to run the app with mock data
   */
  enableMocks?: boolean;
};

/**
 * @param {CreateStore}
 */
export const createStore = (props?: CreateStore) => {
  const services = createApiServices(props?.enableMocks || false);

  const sagaMiddleware = createSagaMiddleware({
    context: {
      ...services,
    },
  });

  const store = configureStore({
    reducer: {
      ...reducers,
    },
    preloadedState: {
      ...props?.defaultState,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(sagas);

  return store;
};

export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
