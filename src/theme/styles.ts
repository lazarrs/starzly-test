import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex1: {flex: 1},
  flexRow: {flexDirection: 'row'},
  font10: {fontSize: 10},
  font14: {fontSize: 14},
  font16: {fontSize: 16},
  font20: {fontSize: 20},
  spaceBetween: {justifyContent: 'space-between'},
  alignCenter: {alignItems: 'center'},
  justifyCenter: {justifyContent: 'center'},
  alignEnd: {alignItems: 'flex-end'},
  upperCase: {textTransform: 'uppercase'},
  aspectRatio1: {aspectRatio: 1},
  textCenter: {textAlign: 'center'},
  underline: {textDecorationLine: 'underline'},
  throughline: {textDecorationLine: 'line-through'},
  textWithShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 1,
  },
  mt6: {marginTop: 6},
  mb6: {marginTop: 6},
  my6: {marginVertical: 6},
  mt15: {marginTop: 15},
  ml8: {marginLeft: 8},
  mr8: {marginRight: 8},
  mx8: {marginHorizontal: 8},
});

export default styles;
