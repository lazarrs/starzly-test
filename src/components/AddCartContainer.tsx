import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors, CustomStyles, Fonts} from '../theme';
import {Feed} from '../types';
import {STText} from './STText';

interface Props {
  item: Feed;
  showCartModal?: () => void;
}

export const AddCartContainer = ({item, showCartModal = () => {}}: Props) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.contentContainer} pointerEvents="box-none">
        <Image
          style={styles.productImage}
          source={{uri: item?.talent?.avatar_url}}
        />
        <View style={styles.descriptionContainer} pointerEvents="none">
          <STText style={styles.description} numberOfLines={1}>
            $140
          </STText>
          <STText style={styles.description} numberOfLines={1}>
            #Eau de Parfum
          </STText>
          <STText numberOfLines={1}>
            Top Noties Bergamote Top Noties Bergamote Top Noties Bergamote
          </STText>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={showCartModal}>
          <STText style={[CustomStyles.textCenter, Fonts.HelveticaNeueBold]}>
            {'ADD TO\nCART'}
          </STText>
          <View style={styles.overlay} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#00000080',
    borderRadius: 15,
    padding: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 64,
    height: 64,
    backgroundColor: '#ffffff80',
    borderRadius: 32,
    flexShrink: 0,
    marginRight: 20,
    borderWidth: 2,
    borderColor: Colors.PINK,
  },
  descriptionContainer: {
    flex: 1,
    height: '100%',
    marginRight: 20,
  },
  description: {
    ...Fonts.HelveticaNeueBold,
    fontSize: 16,
    flex: 1,
  },
  cartButton: {
    backgroundColor: Colors.PINK,
    borderRadius: 8,
    padding: 18,
    flexShrink: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 2,
    left: 5,
    right: 5,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#00000040',
  },
});
