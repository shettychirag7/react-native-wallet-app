import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getAllTransactions} from '../../redux/reducers/transactions';
import {RootState} from '../../redux/store';
import {TransactionsState} from '../../redux/reducers/transactions';
import Screen from '../../navigation/Screens';

import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.Transactions
>['navigation'];

const Transactions = ({navigation}: {navigation: NavigationProps}) => {
  const {transactions} = useSelector<RootState, TransactionsState>(
    s => s.transactions,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const onPressTransaction = (txnId: string) => {
    navigation.navigate(Screen.TransactionDetails, {
      txnId,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions Screen</Text>
      {transactions.map(transaction => (
        <TouchableOpacity
          key={transaction.id}
          onPress={() => onPressTransaction(transaction.id)}>
          <Text
            style={[
              styles.title,
              styles.transactions,
            ]}>{`Transaction ${transaction.id}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Transactions;
