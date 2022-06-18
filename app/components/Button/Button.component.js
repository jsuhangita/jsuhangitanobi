import React from 'react';
import {Button} from '@rneui/base';
import {
  colors,
  defaultTextStyle,
  fontStyleMedium,
} from '../../styles/theme.styles';
import {StyleSheet} from 'react-native';

export default function ButtonComponent({title, ...other}) {
  return (
    <Button
      title={title}
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
      {...other}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: colors.buttonBackground,
  },
  titleStyle: {
    ...fontStyleMedium,
  },
});
