import React from 'react';
import PropTypes from 'prop-types';
import {Text as RNText, StyleSheet} from 'react-native';
import {
  defaultTextStyle,
  fontStyleBold,
  fontStyleExtraSmall,
  fontStyleLarge,
  fontStyleMedium,
  fontStyleSmall,
} from '../../styles/theme.styles';

const Text = ({
  secondary,
  center,
  extraSmall,
  small,
  medium,
  large,
  bold,
  extraBold,
  spacer,
  children,
  color,
  style,
  ...rest
}) => {
  return (
    <RNText
      {...rest}
      style={[
        styles.text,
        center && styles.center,
        extraSmall && styles.extraSmall,
        small && styles.small,
        medium && styles.medium,
        large && styles.large,
        bold && styles.bold,
        extraBold && styles.extraBold,
        {marginVertical: spacer},
        color && {color: color},
        style,
      ]}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  secondary: PropTypes.bool,
  center: PropTypes.bool,
  extraSmall: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  bold: PropTypes.bool,
  extraBold: PropTypes.bool,

  spacer: PropTypes.number,

  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.string,

  style: PropTypes.any,
};

Text.defaultProps = {
  secondary: false,
  center: false,
  extraSmall: false,
  small: false,
  medium: false,
  large: false,
  bold: false,
  extraBold: false,

  spacer: 0,

  children: '',
  color: null,

  style: {},
};

const styles = StyleSheet.create({
  text: {
    ...defaultTextStyle,
  },

  center: {
    textAlign: 'center',
  },

  extraSmall: {
    ...fontStyleExtraSmall,
  },

  small: {
    ...fontStyleSmall,
  },

  medium: {
    ...fontStyleMedium,
  },

  large: {
    ...fontStyleLarge,
  },

  bold: {
    ...fontStyleBold,
  },

  extraBold: {},
});

export default Text;
