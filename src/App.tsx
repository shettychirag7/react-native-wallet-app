import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigation from './navigation/MainStackNavigation';

import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
