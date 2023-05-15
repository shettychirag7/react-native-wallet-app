import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import R from '../../assets';

import {
  TransactionList,
  getAllTransactions,
} from '../../redux/reducers/transactions';
import {RootState} from '../../redux/store';

import Screen from '../../navigation/Screens';

import {RootStackParamList} from '../../navigation/types';
import BackButton from '../../components/BackButton';

import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.Notification
>['navigation'];

const Notifications = ({navigation}: {navigation: NavigationProps}) => {
  const transactions = useSelector<RootState, TransactionList>(
    s => s.transactions.transactions,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    transactions.length === 0 && dispatch(getAllTransactions());
  }, [dispatch, transactions]);

  const unreadTxns = transactions.filter(item => !item.notification_read);

  const onPressTransaction = (txnId: string) => {
    navigation.navigate(Screen.TransactionDetails, {
      txnId,
    });
  };

  return (
    <View style={styles.container}>
      <BackButton
        testID="back-button"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>{R.strings.notifications.title}</Text>
      {unreadTxns.length > 0 &&
        unreadTxns?.map(transaction => (
          <TouchableOpacity
            key={transaction.id}
            onPress={() => onPressTransaction(transaction.id)}>
            <Text
              style={[
                styles.title,
                styles.transactions,
              ]}>{`${R.strings.notifications.label} ${transaction.id}`}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default Notifications;
