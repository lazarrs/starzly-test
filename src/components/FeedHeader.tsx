import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {STText} from './STText';
import {Colors, CustomStyles} from '../theme';
import {Feed} from '../types';

import ThreeDotIcon from '../assets/icons/ThreeDotIcon';

interface Props {
  item: Feed;
}

export const FeedHeader = ({item}: Props) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={[StyleSheet.absoluteFillObject, styles.nameContainer]}>
        <STText style={styles.name} numberOfLines={1}>
          {item.talent.name_en}
        </STText>
      </View>
      <TouchableOpacity>
        <ThreeDotIcon fill={Colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
  },
  nameContainer: {
    flex: 1,
    paddingHorizontal: '10%',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    ...CustomStyles.textWithShadow,
  },
});
