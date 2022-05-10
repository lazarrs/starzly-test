import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Video, {OnLoadData} from 'react-native-video';

import {Metrics} from '../theme';
import {Feed} from '../types';
import FeedActionContainer from './FeedActionContainer';

interface Props {
  item: Feed;
  focused: boolean;
  muted: boolean;
  setMuted?: () => void;
  showCartModal?: () => void;
  onLike?: () => void;
}

const VideoFeed = ({
  item,
  focused = false,
  muted,
  setMuted = () => {},
  showCartModal = () => {},
  onLike = () => {},
}: Props) => {
  const [paused, setPaused] = React.useState(false);
  const [isPortrait, setIsPortrait] = React.useState(true);

  const onVideoLoad = React.useCallback((data: OnLoadData) => {
    setIsPortrait(data.naturalSize.height > data.naturalSize.width);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setPaused(!paused)}
      style={{width: Metrics.windowWidth, height: Metrics.windowHeight}}>
      <Video
        muted={muted}
        paused={!focused || paused}
        source={{uri: item.url}}
        repeat
        controls={false}
        onLoad={onVideoLoad}
        style={StyleSheet.absoluteFillObject}
        resizeMode={isPortrait ? 'cover' : 'contain'}
      />
      <FeedActionContainer
        item={item}
        muted={muted}
        setMuted={setMuted}
        showCartModal={showCartModal}
        onLike={onLike}
      />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(VideoFeed);
