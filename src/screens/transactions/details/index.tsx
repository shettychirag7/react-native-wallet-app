import React from 'react';
import {Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import BackButton from '../../../components/BackButton';

import {RootStackParamList} from '../../../navigation/types';
import Screen from '../../../navigation/Screens';

import styles from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  Screen.TransactionDetails
>;

const TransactionDetails = ({route, navigation}: Props) => {
  const txnId = route?.params?.txnId || '';
  return (
    <View style={styles.container}>
      <BackButton
        testID="back-button"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Transactions screen</Text>
      <Text style={styles.title}>{`Transaction ID is ${txnId}`}</Text>
    </View>
  );
};

export default TransactionDetails;
