import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors, Typography, Mixins, Dimens} from '_styles/';
import {Input} from 'react-native-elements';
import {CommonInput} from '_styles/common';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Custom Input with a title (or label) that contain an input
 * that containing a state variable whether or not it is valid with
 * respect to the Regex (regex may be optional).
 */
const CustomInputWithTitle = props => {
  const {
    title = '',
    titleStyle = {},
    inputStyles = {},
    containerStyles = {},
    pattern = null,
    setOnValidation,
    setOnChangeText,
    errorMsg = '',
    styleErrorMsg = {},
    onBlur = null,
    password = false,
    image,
    imageStyle
  } = props;

  const [valid, setValid] = useState(false);
  const [pass, setPass] = useState(password);
  const [visible, setVisible] = useState(false);

  const handleValidation = value => {
    if (!pattern) return true;

    //string pattern, one validation rule
    if (typeof pattern === 'string') {
      const condition = new RegExp(pattern, 'g');
      return condition.test(value);
    }
    //array patterns, multiple validation rules
    if (typeof pattern === 'object') {
      const conditions = pattern.map(rule => new RegExp(rule, 'g'));
      return conditions.map(condition => condition.test(value));
    }
  };

  const onChange = value => {
    const isValid = handleValidation(value);
    setOnValidation && setOnValidation(isValid);
    setValid(isValid);
    setOnChangeText(value);
  };

  return (
    <Input
      label={title}
      labelStyle={[styles.labelStyle, titleStyle]}
      inputStyle={[styles.inputStyle]}
      containerStyle={[styles.input, containerStyles]}
      inputContainerStyle={[styles.inputContainerStyle, inputStyles]}
      errorMessage={errorMsg}
      errorStyle={[
        styles.error,
        styleErrorMsg,
        {color: valid ? Colors.BACKGROUND : 'red'},
      ]}
      onChangeText={value => onChange(value)}
      onBlur={() => (onBlur ? onBlur : '')}
      secureTextEntry={pass}
      rightIcon={
        password ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
              setPass(!pass);
            }}>
            <Ionicons
              name={visible ? 'md-eye' : 'md-eye-off'}
              color={Colors.DARK_MEDIUM}
              size={Dimens.ICON_SIZE}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : image ? (
          <Image source={image} style={imageStyle} />
        ) : (
          <></>
        )
      }
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    ...CommonInput.labelInput,
  },
  input: {
    ...CommonInput.firstInputContainer,
  },
  inputContainerStyle: {
    ...CommonInput.secondInputContainer,
  },
  inputStyle: {
    ...CommonInput.textInput,
  },
  error: {
    ...CommonInput.errorInput,
  },
  icon: {
    marginRight: 15,
  }
});

export default CustomInputWithTitle;
