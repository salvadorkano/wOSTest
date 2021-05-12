import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Sizes, Dimens, Mixins, Typography} from '_styles/';
import {CommonButton, CommonLabel, CommonLoading} from '_styles/common';
import {Colors} from '_styles/';
import {Button} from 'react-native-elements';
import * as RootNavigation from '_navigations/NavigationsActions';
import auth from '@react-native-firebase/auth';
import {AlertInformational} from '_utils/Alerts';
import CustomInputWithTitle from '_molecules/generics/CustomInputWithTitle';

/*
Login contain
*/
export default () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [loading, SetLoading] = useState(false);

  const [errorEmail, setErrorEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    valid();
    return function cleanup() {
      //UNMOUNT
    };
  }, [user, emailValid, password]);

  const login = () => {
    // RootNavigation.navigate('TabBar')
    SetLoading(true);
    setEnabled(false);
    setPassword('');
    auth()
      .signInWithEmailAndPassword(user, password)
      .then(() => {
        SetLoading(false);
        var user = auth().currentUser;
        RootNavigation.navigate('TabBar');
      })
      .catch(error => {
        SetLoading(false);
        if (error.code === 'auth/wrong-password') {
          AlertInformational('Contraseña incorrecta');
        }
        if (error.code === 'auth/invalid-email') {
          AlertInformational('Formato de correo incorrecto');
        }
        if (error.code === 'auth/user-not-found') {
          AlertInformational('Usuario incorrecto');
        } else {
          console.log('Error', error);
        }
      });
  };

  const focusNextField = id => {
    inputs[id].focus();
  };

  const valid = () => {
    if (user != '' && emailValid && password != '') {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  const validEmail = value => {
    setUser(value);
    valid();
    if (emailValid == false) {
      setErrorEmail('El correo no puede contener espacios');
    }
  };

  return (
    <View style={styles.container}>
      <CustomInputWithTitle
        placeholder="Correo"
        value={user}
        placeholderTextColor={Colors.PLACEHOLDERCOLOR}
        errorMsg={errorEmail}
        pattern={'^\\S*$'}
        setOnValidation={setEmailValid}
        setOnChangeText={value => {
          validEmail(value);
          setEnabled(
            value != '' && emailValid && password != '' ? true : false,
          );
        }}
        styleErrorMsg={styles.errorMessage}
      />

      <CustomInputWithTitle
        placeholder="Contraseña"
        value={password}
        placeholderTextColor={Colors.PLACEHOLDERCOLOR}
        password={true}
        onChangeText={value => {
          setPassword(value);
          setEnabled(user != '' && emailValid && value != '' ? true : false);
        }}
      />
      <View style={styles.labelPasswordInput}>
        {/* <TouchableOpacity
          onPress={() =>
            RootNavigation.navigate('ForgotPassword', {
              title: 'Olvidé mi contraseña',
              close: true,
            })
          }>
          <Text
            style={[styles.textLabelPasswordInput, {color: Colors.BLUE}]}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity> */}
      </View>
      <Button
        loading={loading}
        loadingProps={{
          color: Colors.BLUE,
          size: Dimens.ACTIVITY_INDICATOR_SIZE,
        }}
        onPress={() => login()}
        title="Iniciar sesión"
        titleStyle={
          !enabled ? styles.loginBtnEnabledTitle : styles.loginBtnDisabledTitle
        }
        buttonStyle={
          !enabled ? styles.loginBtnEnabled : styles.loginBtnDisabled
        }
        disabled={!enabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Dimens.HORIZONTAL_MEDIUM,
    paddingTop: wp('10%'),
  },
  labelPasswordInput: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: wp('5%'),
  },
  textLabelPasswordInput: {
    ...CommonLabel.label,
  },
  loginBtnDisabled: {
    ...CommonButton.containerButton,
  },
  loginBtnEnabled: {
    ...CommonButton.containerButton,
  },
  loginBtnDisabledTitle: {
    ...CommonButton.textDisabledButton,
  },
  loginBtnEnabledTitle: {
    ...CommonButton.textEnabledButton,
  },
  createAccount: {
    backgroundColor: Colors.BACKGROUND,
  },
  createAccountTitle: {
    color: Colors.PLACEHOLDERCOLOR,
  },
  errorMessage: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
});
