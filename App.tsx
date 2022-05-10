import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {RootStackNavigator} from './src/navigation';

import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent barStyle="light-content" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
