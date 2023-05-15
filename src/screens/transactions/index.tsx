import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  TransactionList,
  getAllTransactions,
} from '../../redux/reducers/transactions';
import {RootState} from '../../redux/store';

import Screen from '../../navigation/Screens';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';

import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.Transactions
>['navigation'];

const Transactions = ({navigation}: {navigation: NavigationProps}) => {
  const transactions = useSelector<RootState, TransactionList>(
    s => s.transactions.transactions,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    transactions.length === 0 && dispatch(getAllTransactions());
  }, [dispatch, transactions]);

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
