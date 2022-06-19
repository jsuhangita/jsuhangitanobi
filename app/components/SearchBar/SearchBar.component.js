import React from 'react';
import {SearchBar} from '@rneui/base';
import {StyleSheet} from 'react-native';
import {colors, fontStyleMedium} from '../../styles/theme.styles';

export default function SearchBarComponent({...props}) {
  return (
    <SearchBar
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      placeholder={'Search'}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    padding: 5,
    backgroundColor: colors.searchBackground,
    borderRadius: 10,
    height: 45,
  },
  inputStyle: {
    ...fontStyleMedium,
    // textAlign: 'center',
  },
});
