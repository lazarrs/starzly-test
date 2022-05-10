import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomNavBarHeight} from '../theme/metrics';
import {Feed} from '../types';
import {AddCartContainer} from './AddCartContainer';
import FeedActions from './FeedActions';
import {FeedHeader} from './FeedHeader';

interface Props {
  item: Feed;
  muted?: boolean;
  showCartModal?: () => void;
  setMuted?: () => void;
  onLike?: () => void;
}

const FeedActionContainer = ({
  muted,
  item,
  setMuted = () => {},
  showCartModal = () => {},
  onLike = () => {},
}: Props) => {
  const insets = useSafeAreaInsets();
  const paddingBottom =
    insets.bottom > 0 ? BottomNavBarHeight + 20 : BottomNavBarHeight * 0.7 + 20;
  return (
    <View
      style={[styles.container, {paddingBottom, paddingTop: insets.top + 10}]}
      pointerEvents="box-none">
      <View style={styles.contentContainer} pointerEvents="box-none">
        <FeedHeader item={item} />
        <FeedActions
          muted={muted}
          item={item}
          setMuted={setMuted}
          onLike={onLike}
        />
        <AddCartContainer showCartModal={showCartModal} item={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
});

export default React.memo(FeedActionContainer);
