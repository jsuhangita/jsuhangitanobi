export const colors = {
  darkBlue: '#152A53',
  inputBackground: '#11203C',
  black: '#000000',
  white: '#EAEAEA',
  fadeGrey: '#9D9FA0',
  inputError: '#F6BC45',
  buttonBackground: '#2C5DEB',
  toscaGreen: '#05BE90',
  searchBackground: '#223965',
  danger: '#eb4034',
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
  fontFamily: 'CircularStd-Bold',
  fontWeight: 'bold',
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
