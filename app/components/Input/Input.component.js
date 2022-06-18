import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from '@rneui/themed';
import {
  colors,
  fontStyleBold,
  fontStyleItalic,
  fontStyleMedium,
} from '../../styles/theme.styles';

export default function InputComponent({label, placeholder, ...other}) {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainer}
      labelStyle={styles.labelStyle}
      inputStyle={styles.inputStyle}
      errorStyle={styles.errorStyle}
      {...other}
    />
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    // backgroundColor: 'red',
    marginBottom: 13,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 8,
    height: 40,
  },
  labelStyle: {
    ...fontStyleMedium,
    color: colors.fadeGrey,
    marginBottom: 13,
  },
  inputStyle: {
    ...fontStyleMedium,
    textAlign: 'center',
  },
  errorStyle: {
    ...fontStyleMedium,
    ...fontStyleItalic,
    color: colors.inputError,
    marginTop: 8,
  },
});
