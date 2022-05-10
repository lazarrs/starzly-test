import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {VideoFeed} from '../../components';
import {AddCartModal} from '../../components/modals';
import {fetchFeedAction, likeFeedAction} from '../../store/discover/actions';
import {feedSelector} from '../../store/discover/selector';
import {Colors, CustomStyles, Metrics} from '../../theme';
import {Feed} from '../../types';

export const DiscoverScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {items, page, loading, hasMore} = useSelector(feedSelector);
  const [showCart, setShowCart] = React.useState(false);
  const [focused, setFocused] = React.useState(true);
  const [currentFeedId, setCurrentFeedId] = React.useState<number>();
  const [muted, setMuted] = React.useState(true);
  const [selectedFeed, setSelectedFeed] = React.useState<Feed>();

  React.useEffect(() => {
    dispatch(fetchFeedAction({page: 1}));
  }, [dispatch]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setFocused(true);
    });
    navigation.addListener('blur', () => {
      setFocused(false);
    });
  }, [navigation]);

  const getItemLayout = React.useCallback(
    (_, index) => ({
      length: Metrics.windowHeight,
      offset: Metrics.windowHeight * index,
      index,
    }),
    [],
  );

  const handleViewableItemsChanged = React.useCallback(({viewableItems}) => {
    if (!viewableItems || viewableItems.length === 0) {
      return;
    }
    const {item: viewableItem} = viewableItems[viewableItems.length - 1];
    setCurrentFeedId(viewableItem.id);
  }, []);

  const onLike = React.useCallback(
    (id: number) => {
      dispatch(likeFeedAction(id));
    },
    [dispatch],
  );

  const loadMore = React.useCallback(() => {
    if (!loading && hasMore) {
      dispatch(fetchFeedAction({page: page + 1}));
    }
  }, [dispatch, hasMore, loading, page]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <VideoFeed
            item={item}
            focused={currentFeedId === item.id && focused}
            muted={muted}
            setMuted={() => setMuted(!muted)}
            showCartModal={() => {
              setSelectedFeed(item);
              setShowCart(true);
            }}
            onLike={() => onLike(item.id)}
          />
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
        getItemLayout={getItemLayout}
        // onEndReachedThreshold={50}
        onEndReached={() => loadMore()}
      />
      <AddCartModal
        isVisible={showCart}
        item={selectedFeed}
        onClose={() => {
          setShowCart(false);
          setSelectedFeed(undefined);
        }}
      />
      <View
        pointerEvents="box-none"
        style={[
          StyleSheet.absoluteFillObject,
          CustomStyles.alignCenter,
          CustomStyles.justifyCenter,
        ]}>
        {loading && <ActivityIndicator />}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});
