import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import DiscoverIcon from '../assets/icons/DiscoverIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import CartIcon from '../assets/icons/CartIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import AddIcon from '../assets/icons/AddIcon';
import {Colors, Metrics} from '../theme';
import {STText} from './STText';

const TABS = [
  {
    label: 'Discover',
    route: 'Discover',
    icon: <DiscoverIcon fill={Colors.WHITE} />,
    iconSelected: <DiscoverIcon fill={Colors.PINK} />,
    index: 0,
  },
  {
    label: 'Stars',
    route: 'Stars',
    icon: <SearchIcon fill={Colors.WHITE} />,
    iconSelected: <SearchIcon fill={Colors.PINK} />,
    index: 1,
  },
  {
    label: 'Add',
    icon: <AddIcon />,
    iconSelected: <AddIcon />,
    index: -1,
  },
  {
    label: 'Cart',
    route: 'Cart',
    icon: <CartIcon fill={Colors.WHITE} />,
    iconSelected: <CartIcon fill={Colors.PINK} />,
    index: 2,
  },
  {
    label: 'Profile',
    route: 'Profile',
    icon: <ProfileIcon fill={Colors.WHITE} />,
    iconSelected: <ProfileIcon fill={Colors.PINK} />,
    index: 3,
  },
];

export const BottomNavigationBar = (props: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const {
    navigation,
    state: {index: activeIndex, routes = []},
  } = props;

  const onNavigate = (item: string = '', index: number) => {
    if (!item) {
      // Navigate POST screen/modal
      return;
    }
    const currentRoute = routes.find(route => route.name === item);
    if (activeIndex !== index) {
      navigation.navigate(item!);
    } else if (
      !!currentRoute &&
      currentRoute.state &&
      currentRoute.state.routeNames &&
      currentRoute.state.routeNames.length
    ) {
      navigation.navigate(currentRoute.state.routeNames[0]);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          height:
            insets.bottom > 0
              ? Metrics.BottomNavBarHeight
              : Metrics.BottomNavBarHeight * 0.7,
        },
      ]}>
      <LinearGradient
        colors={['transparent', '#00000090', Colors.BLACK]}
        style={StyleSheet.absoluteFillObject}
        pointerEvents="none"
      />
      <View style={styles.tabBarContainer}>
        {TABS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabItem}
            onPress={() => onNavigate(item.route, item.index)}>
            {activeIndex === item.index ? item.iconSelected : item.icon}
            <STText
              style={[
                styles.tabLabel,
                activeIndex === item.index && {
                  color: Colors.PINK,
                },
                item.index === -1 && {
                  color: Colors.WHITE,
                },
              ]}>
              {item.label}
            </STText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: undefined,
  },
  tabBarContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
  },
  tabLabel: {
    marginTop: 10,
    fontSize: 12,
    color: Colors.WHITE,
  },
});
