import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {createStore} from './redux/store';

import MainStackNavigation from './navigation/MainStackNavigation';

import styles from './styles';

const App = () => {
  const store = createStore({
    enableMocks: true,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
