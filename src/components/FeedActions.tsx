import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {HEIGHT_UNIT} from '../theme/metrics';

import LikeIcon from '../assets/icons/LikeIcon';
import CommentIcon from '../assets/icons/CommentIcon';
import MuteIcon from '../assets/icons/MuteIcon';
import {STText} from './STText';
import {Colors, CustomStyles, Fonts} from '../theme';
import {Feed} from '../types';
import {Formatter} from '../helper';

interface Props {
  muted?: boolean;
  item: Feed;
  setMuted?: () => void;
  onLike?: () => void;
}

const FeedActions = ({
  muted,
  item,
  setMuted = () => {},
  onLike = () => {},
}: Props) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.contentContainer} pointerEvents="box-none">
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={onLike}>
            <LikeIcon width={22} height={20} />
          </TouchableOpacity>
          {item.likes && (
            <STText style={styles.label}>
              {Formatter.formatNumber(item.likes || 0)}
            </STText>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <CommentIcon />
          </TouchableOpacity>
          <STText style={styles.label}>{Formatter.formatNumber(22700)}</STText>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.avatarButton]}>
            <Image
              source={{uri: item.talent.avatar_url}}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={setMuted}>
            <MuteIcon muted={muted} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    width: '90%',
    paddingBottom: 30 * HEIGHT_UNIT,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 22 * HEIGHT_UNIT,
  },
  actionButton: {
    backgroundColor: '#00000080',
    width: 48,
    height: 48,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9 * HEIGHT_UNIT,
  },
  label: {
    ...CustomStyles.textWithShadow,
    ...Fonts.HelveticaNeueMedium,
    fontSize: 16,
  },
  avatarButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.WHITE,
    padding: 2,
  },
  avatar: {
    width: 41,
    height: 41,
    borderRadius: 20.5,
  },
});

export default React.memo(FeedActions);
