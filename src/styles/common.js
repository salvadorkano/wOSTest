import {StyleSheet} from 'react-native';
import {Dimens, Sizes, Typography, Colors} from '_styles/';
import {bitShadow, bitBorder} from './bitCommon';

export const CommonInput = StyleSheet.create({
  labelInput: {
    fontSize: Sizes.FONT_SIZE_MEDIUM,
    color: Colors.PRIMARY,
    fontWeight: '300',
  },
  firstInputContainer: {
    height: Dimens.FIRST_INPUT_CONTAINER,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 0,
  },
  secondInputContainer: {
    height: Dimens.SECOND_INPUT_CONTAINER,
    borderColor: Colors.LIGHT,
    backgroundColor: Colors.INPUT,
    marginTop: 5
  },
  textInput: {
    backgroundColor: Colors.INPUT,
    paddingHorizontal: Dimens.HORIZONTAL_SMALLEST,
    fontSize: Sizes.FONT_SIZE_NORMAL,
    alignSelf: 'center',
  },
  errorInput: {
    fontSize: Sizes.FONT_SIZE_SMALLEST,
    color: Colors.ERROR,
    marginLeft: 0,
  },
});

export const CommonButton = StyleSheet.create({
  containerButton: {
    height: Dimens.BUTTON_CONTAINER_VERTICAL,
    width: '100%',
    backgroundColor: Colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    ...bitBorder.border,
    borderColor: 'transparent',
  },
  containerCallButton: {
    height: Dimens.BUTTON_CONTAINER_VERTICAL,
    width: '100%',
    backgroundColor: Colors.PLACEHOLDERCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    ...bitBorder.border,
    borderColor: 'transparent',
  },
  textEnabledButton: {
    fontFamily: 'System',
    fontSize: Dimens.VERTICAL_SMALLEST,
    color: Colors.BACKGROUND,
  },
  textDisabledButton: {
    // fontFamily: Typography.Montserrat_Black,
    fontSize: Sizes.FONT_SIZE_LARGE,
    color: Colors.PLACEHOLDERCOLOR,
  },
});

export const CommonLabel = StyleSheet.create({
  label: {
    // fontFamily: Typography.Montserrat_Regular,
    fontSize: Sizes.FONT_SIZE_NORMAL,
    color: Colors.DARK_REGULAR,
    fontWeight: '300',
  },
});

export const CommonLoading = StyleSheet.create({
  loading: {
    height: Dimens.LOADING,
    color: Colors.SECONDARY,
  },
});

export const CommonHeader = StyleSheet.create({
  header: {
    height: Dimens.HEADER_HOME,
    width: '100%',
    borderBottomLeftRadius: 45,
  },
  headerSimple: {
    height: Dimens.HEADER_SIMPLE,
    width: '100%',
    borderBottomLeftRadius: 45,
  },
});

export const CommonBorderAndShadow = StyleSheet.create({
  borderAndShadow: {
    ...bitShadow.shadow,
    ...bitBorder.border,
  },
});

export const CommonGradient = StyleSheet.create({
  gradient: {
    flex: 1,
    borderBottomLeftRadius: 45,
  },
});
