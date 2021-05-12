import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, text, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputScrollView from 'react-native-input-scroll-view';
import LoginContain from '_organims/login/LoginContain';
import ReactNativeIcon from '_assets/images/ReactNativeIcon.png';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <InputScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.Logo}>
          <Image
            resizeMode="contain"
            style={{height: wp('50%'), width: wp('50%')}}
            source={ReactNativeIcon}
          />
        </View>
        <View style={styles.LoginContain}>
          <LoginContain />
        </View>
      </InputScrollView>
    </View>
  );
};

export default LoginScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  Logo: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp('20%'),
  },
  LoginContain: {
    flex: 3,
  },
});
