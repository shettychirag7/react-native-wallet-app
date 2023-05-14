import React from 'react';
import {TouchableOpacity, View, ViewProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

interface BackButtonProps extends ViewProps {
  onPress?: () => void;
}

const BackButton = (props: BackButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.container}>
        <Icon name="arrow-back" size={26} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
