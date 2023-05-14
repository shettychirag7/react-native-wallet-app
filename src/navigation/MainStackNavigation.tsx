import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import Notifications from '../screens/notifications';
import TransactionDetails from '../screens/transactions/details';

import {RootStackParamList} from './types';
import Screens from './Screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Main}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Screens.Main} component={BottomTabNavigation} />
      <Stack.Screen name={Screens.Notification} component={Notifications} />
      <Stack.Screen
        name={Screens.TransactionDetails}
        component={TransactionDetails}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
