export const colors = {
  darkBlue: '#152A53',
  inputBackground: '#11203C',
  black: '#000000',
  white: '#EAEAEA',
  fadeGrey: '#9D9FA0',
  inputError: '#F6BC45',
};

const fontSizes = {
  extraSmall: 10,
  small: 13,
  normal: 14,
  medium: 15,
  large: 44,
};

export const defaultTextStyle = {
  fontFamily: 'CircularStd-Book',
  fontSize: fontSizes.normal,
  color: colors.white,
  fontWeight: 'normal',
};

export const fontStyleBold = {
  fontFamily: 'CircularStd-Medium',
};

export const fontStyleItalic = {
  fontFamily: 'CircularStd-BookItalic',
};

export const fontStyleExtraSmall = {
  ...defaultTextStyle,
  fontSize: fontSizes.extraSmall,
};

export const fontStyleSmall = {
  ...defaultTextStyle,
  fontSize: fontSizes.small,
};

export const fontStyleNormal = {
  ...defaultTextStyle,
  fontSize: fontSizes.normal,
};

export const fontStyleMedium = {
  ...defaultTextStyle,
  fontSize: fontSizes.medium,
};

export const fontStyleLarge = {
  ...defaultTextStyle,
  fontSize: fontSizes.large,
};
