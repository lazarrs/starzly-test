import React, {useState} from 'react';
import {Image, FlatList, View, StyleSheet} from 'react-native';
import {Colors} from '../theme';

const data = [
  'https://picsum.photos/400/300',
  'https://picsum.photos/300/300',
  'https://picsum.photos/250/300',
  'https://picsum.photos/280/300',
  'https://picsum.photos/290/300',
];

interface Props {
  itemWidth: number;
}

export const CartImageCarousel = ({itemWidth}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleViewableItemsChanged = React.useCallback(({viewableItems}) => {
    if (!viewableItems || viewableItems.length === 0) {
      return;
    }
    const {index} = viewableItems[viewableItems.length - 1];
    setCurrentIndex(index);
  }, []);
  return (
    <View>
      <FlatList
        pagingEnabled
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={{width: itemWidth, aspectRatio: 4 / 3}}
            resizeMode="cover"
          />
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
      <View style={styles.paginatorContainer}>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.paginator,
              index === currentIndex && {backgroundColor: Colors.BLACK},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginatorContainer: {
    ...StyleSheet.absoluteFillObject,
    top: undefined,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginator: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: Colors.LIGHT_GRAY,
    marginHorizontal: 4,
  },
});
