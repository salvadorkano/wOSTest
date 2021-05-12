import {StyleSheet} from 'react-native';
import {Colors} from '_styles/';

export const bitShadow = StyleSheet.create({
  shadow: {
    shadowColor: Colors.DARK_REGULAR,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {width: 2, height: 3},
    elevation: 3,
  },
});

export const bitBorder = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.LIGHT,
  },
});
