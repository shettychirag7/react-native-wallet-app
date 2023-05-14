import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/home';
import Buy from '../screens/buy';
import Transactions from '../screens/transactions';
import Profile from '../screens/profile';
import Scanner from '../screens/scanner';

import ScannerIcon from '../assets/images/scanner_icon.svg';

import {RootStackParamList} from './types';
import Screen from './Screens';
import {getIconName} from './helpers';
import styles from './styles';

const Tab = createBottomTabNavigator<RootStackParamList>();

const getScreenOptions = ({route}: {route: RouteProp<ParamListBase>}) => ({
  tabBarIcon: ({focused}: {focused: boolean}) => {
    const iconName = getIconName(route.name);
    if (route.name === Screen.Scanner) {
      return <ScannerIcon />;
    }
    return (
      <Icons
        testID={`icon_${iconName}`}
        name={iconName}
        size={24}
        color={focused ? '#3aa1ee' : 'gray'}
      />
    );
  },
  tabBarActiveTintColor: '#3aa1ee',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
  tabBarStyle: styles.tabBarStyle,
  tabBarLabelStyle: styles.tabBarLabelStyle,
});

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen name={Screen.Home} component={Home} />
      <Tab.Screen name={Screen.Buy} component={Buy} />
      <Tab.Screen
        name={Screen.Scanner}
        component={Scanner}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen name={Screen.Transactions} component={Transactions} />
      <Tab.Screen name={Screen.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
