import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigation/types';
import Screen from '../../navigation/Screens';

import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.Home
>['navigation'];

const Home = ({navigation}: {navigation: NavigationProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screen.Notification)}>
        <Text style={[styles.title, styles.link]}>Go to Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
