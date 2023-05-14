import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import Notifications from '../screens/notifications';

import Screens from './Screens';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Main}>
      <Stack.Screen
        name={Screens.Main}
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Screens.Notification} component={Notifications} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
