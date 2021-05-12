import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '_styles/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Sizes, Dimens, Mixins, Typography} from '_styles/';
import {margin} from '_styles/mixins';
import {Button} from 'react-native-elements';
import Home from '_assets/images/ReactNativeIcon.png';
import * as RootNavigation from '_navigations/NavigationsActions';

const UsersList = props => {
  console.log('que trae?', props.item);
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>Hi my name is {item.name}</Text>
        <Text style={styles.text}>My username is{item.username}</Text>
        <Text style={styles.text}>My email is {item.email}</Text>
        <Text style={styles.text}>I life in {item.address.city}</Text>
      </View>
    </View>
  );
};
export default UsersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('90%'),
    height: wp('30%'),
    backgroundColor: Colors.LIGHT,
    margin: wp('2%'),
    borderRadius: 8,
    // justifyContent: 'center',
    // alignItems: 'center',

    // borderRadius: 5,
    borderColor: Colors.TEXT_HEADER,
    borderWidth: 2,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: Dimens.HORIZONTAL_LARGE
  },
  text: {
    fontSize: wp('3.5%'),
    fontWeight: 'bold'
  },
});
