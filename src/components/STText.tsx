import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {Fonts, Colors} from '../theme';

export const STText = (props: TextProps) => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    ...Fonts.HelveticaNeue,
    fontSize: 12,
    color: Colors.WHITE,
  },
});
