import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {BottomStackNavigator} from './BottomStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  const initialRoute = 'BottomStack';
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen name="BottomStack" component={BottomStackNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
