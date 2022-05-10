import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Colors, CustomStyles, Fonts, Metrics} from '../../theme';
import CloseIcon from '../../assets/icons/CloseIcon';
import {STText} from '../STText';

import AddVideoIcon from '../../assets/icons/AddVideoIcon';
import StarIcon from '../../assets/icons/StarIcon';
import CartIcon from '../../assets/icons/CartIcon';
import {Feed} from '../../types';
import {CartImageCarousel} from '../CartImageCarousel';

interface Props extends Partial<ModalProps> {
  onClose: () => void;
  style?: ViewStyle;
  item?: Feed;
}

export const AddCartModal = ({
  item,
  onClose = () => {},
  isVisible,
  ...rest
}: Props) => {
  const insets = useSafeAreaInsets();
  const [collapseDesc, setCollapseDesc] = React.useState(true);

  React.useEffect(() => {
    if (isVisible) {
      setCollapseDesc(true);
    }
  }, [isVisible]);

  return (
    <Modal
      {...rest}
      isVisible={isVisible}
      style={styles.container}
      useNativeDriver
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      onBackdropPress={onClose}>
      <View
        style={[styles.childContainer, {paddingBottom: insets.bottom + 10}]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <CloseIcon fill={Colors.BLACK} />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollView,
            {paddingBottom: insets.bottom + 10},
          ]}>
          <CartImageCarousel
            itemWidth={Metrics.windowWidth - 2 * 30 * Metrics.WIDTH_UNIT}
          />
          <View
            style={[
              CustomStyles.flexRow,
              CustomStyles.spaceBetween,
              CustomStyles.alignCenter,
              CustomStyles.mt15,
            ]}>
            <STText
              numberOfLines={1}
              style={[{color: Colors.GRAY}, CustomStyles.flex1]}>
              {item?.talent?.slug}
            </STText>
            <View style={[styles.actionButton, styles.exclusiveButton]}>
              <STText style={[CustomStyles.font10, CustomStyles.upperCase]}>
                EXCLUSIVE
              </STText>
            </View>
          </View>
          <View
            style={[
              CustomStyles.flexRow,
              CustomStyles.alignCenter,
              styles.section,
            ]}>
            <STText
              numberOfLines={2}
              style={[
                styles.subTitle,
                CustomStyles.flex1,
                {
                  color: Colors.BLACK,
                  ...Fonts.HelveticaNeueBold,
                },
              ]}>
              {item?.talent?.bio_en}
            </STText>
            <View style={[CustomStyles.flexRow, CustomStyles.ml8]}>
              <STText
                style={[
                  CustomStyles.font20,
                  CustomStyles.throughline,
                  {
                    color: Colors.BLACK,
                    ...Fonts.HelveticaNeueBold,
                  },
                ]}>
                $140
              </STText>
              <STText
                style={[
                  CustomStyles.font20,
                  CustomStyles.ml8,
                  {
                    color: Colors.PINK,
                    ...Fonts.HelveticaNeueBold,
                  },
                ]}>
                $99
              </STText>
            </View>
          </View>
          <View style={styles.divider} />
          <View
            style={[
              CustomStyles.flexRow,
              CustomStyles.spaceBetween,
              styles.section,
            ]}>
            <View style={[CustomStyles.flexRow, CustomStyles.flex1]}>
              <Image
                source={{uri: item?.talent?.avatar_url}}
                style={styles.avatar}
              />
              <View style={[CustomStyles.flex1]}>
                <STText
                  numberOfLines={1}
                  style={[{color: Colors.BLACK, ...CustomStyles.font16}]}>
                  By{' '}
                  <STText
                    style={[
                      CustomStyles.font16,
                      Fonts.HelveticaNeueBold,
                      {color: Colors.BLACK},
                    ]}>
                    {item?.talent.name_en}
                  </STText>
                </STText>
                <STText
                  numberOfLines={1}
                  style={[
                    CustomStyles.font16,
                    CustomStyles.mt6,
                    {color: Colors.BLACK},
                  ]}>
                  Actors ▸ Egypt
                </STText>
              </View>
            </View>
            <View style={CustomStyles.alignEnd}>
              <View style={CustomStyles.flexRow}>
                <StarIcon />
                <STText
                  style={[
                    CustomStyles.font16,
                    CustomStyles.ml8,
                    {color: Colors.BLACK},
                  ]}>
                  4.9
                </STText>
              </View>
              <STText style={[{color: Colors.BLACK}, CustomStyles.mt6]}>
                33 Reviews
              </STText>
            </View>
          </View>
          <View style={[CustomStyles.mt6]}>
            <STText
              style={[
                CustomStyles.my6,
                CustomStyles.font16,
                Fonts.HelveticaNeueBold,
                {color: Colors.BLACK},
              ]}>
              Description
            </STText>
            <STText
              numberOfLines={!collapseDesc ? undefined : 4}
              style={[
                CustomStyles.mt6,
                CustomStyles.font14,
                Fonts.HelveticaNeueBold,
                {color: Colors.GRAY},
              ]}>
              {item?.talent?.bio_en}
            </STText>
            <View style={CustomStyles.alignEnd}>
              <TouchableOpacity onPress={() => setCollapseDesc(!collapseDesc)}>
                <STText
                  style={[
                    CustomStyles.mt6,
                    CustomStyles.underline,
                    CustomStyles.font14,
                    Fonts.HelveticaNeueBold,
                    {color: Colors.GRAY},
                  ]}>
                  {collapseDesc ? 'See More' : 'Less'}
                </STText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.addVideoButton]}>
            <AddVideoIcon />
            <STText numberOfLines={2} style={styles.buttonText}>
              {'ADD VIDEO\nREVIEW'}
            </STText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.addCartButton]}>
            <CartIcon />
            <STText numberOfLines={1} style={styles.buttonText}>
              {'ADD TO CART'}
            </STText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 0,
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  childContainer: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30 * Metrics.WIDTH_UNIT,
    borderTopRightRadius: 30 * Metrics.WIDTH_UNIT,
    height: '85%',
    paddingHorizontal: 30 * Metrics.WIDTH_UNIT,
  },
  scrollView: {},
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 14,
    alignSelf: 'flex-end',
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  actionButton: {
    paddingVertical: 14,
    flexDirection: 'row',
    borderRadius: 8 * Metrics.WIDTH_UNIT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PINK,
  },
  addVideoButton: {
    flex: 0.4,
    backgroundColor: Colors.BLACK,
  },
  addCartButton: {
    flex: 0.6,
    marginLeft: 11 * Metrics.WIDTH_UNIT,
  },
  buttonText: {
    ...Fonts.HelveticaNeueBold,
    marginLeft: 10 * Metrics.WIDTH_UNIT,
  },
  exclusiveButton: {
    flexShrink: 0,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  divider: {
    backgroundColor: '#00000030',
    height: 1,
    width: '100%',
    marginVertical: 18,
  },
  section: {
    paddingVertical: 4,
  },
  subTitle: {
    fontSize: 16,
    flex: 0.7,
  },
  avatar: {
    width: 53 * Metrics.WIDTH_UNIT,
    aspectRatio: 1,
    borderRadius: (53 * Metrics.WIDTH_UNIT) / 2,
    marginRight: 14 * Metrics.WIDTH_UNIT,
    flexShrink: 0,
  },
});
