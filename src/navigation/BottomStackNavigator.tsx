import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNavigationBar} from '../components';
import {BottomStackParamList} from '../types';
import {DiscoverScreen} from '../screens/main/DiscoverScreen';
import {StarsScreen} from '../screens/main/StarsScreen';
import {CartScreen} from '../screens/main/CartScreen';
import {ProfileScreen} from '../screens/main/ProfileScreen';

const MainStack = createBottomTabNavigator<BottomStackParamList>();
export const BottomStackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Discover"
      tabBar={props => <BottomNavigationBar {...props} />}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Discover" component={DiscoverScreen} />
      <MainStack.Screen name="Stars" component={StarsScreen} />
      <MainStack.Screen name="Cart" component={CartScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
