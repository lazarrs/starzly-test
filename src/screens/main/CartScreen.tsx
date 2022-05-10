import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cart screen</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
