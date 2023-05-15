import * as React from 'react';
import {Text, View} from 'react-native';

import R from '../../assets';

import styles from './styles';

const Buy = () => {
  return (
    <View style={styles.container}>
      <Text>{R.strings.buy.title}</Text>
    </View>
  );
};

export default Buy;
