import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getAllTransactions} from '../../redux/reducers/transactions';
import {RootState} from '../../redux/store';
import {TransactionsState} from '../../redux/reducers/transactions';

import styles from './styles';

const Transactions = () => {
  const {transactions} = useSelector<RootState, TransactionsState>(
    s => s.transactions,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions Screen</Text>
      {transactions.map(transaction => (
        <Text
          key={transaction.id}
          style={[
            styles.title,
            styles.transactions,
          ]}>{`Transaction ${transaction.id}`}</Text>
      ))}
    </View>
  );
};

export default Transactions;
