import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../navigation/types';
import Screen from '../../navigation/Screens';

import R from '../../assets';
import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  Screen.Profile
>['navigation'];

const Profile = ({navigation}: {navigation: NavigationProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{R.strings.profile.title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screen.Notification)}>
        <Text style={[styles.title, styles.link]}>
          {R.strings.notifications.link}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
