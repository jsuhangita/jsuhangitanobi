import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text/Text.component';
import {Button} from '../index';
import {colors} from '../../styles/theme.styles';
import {Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

export default function LogOutConfirmationComponent({
  onPressCancel,
  onPressLogout,
}) {
  return (
    <View style={styles.overall}>
      <LinearGradient
        colors={[colors.black, colors.darkBlue]}
        style={styles.container}>
        <Icon
          name={'log-out'}
          type={'feather'}
          color={colors.white}
          style={styles.icon}
          size={80}
        />
        <Text bold medium center>
          Are you sure want to log out?
        </Text>
        <Text center>You will be logged out from this account.</Text>
        <Button
          onPress={onPressCancel}
          title={'Cancel'}
          containerStyle={styles.buttonStyle}
          buttonStyle={styles.buttonCancel}
        />
        <Button
          onPress={onPressLogout}
          containerStyle={styles.buttonStyle}
          title={'Log-out'}
          buttonStyle={styles.buttonLogout}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  overall: {
    // backgroundColor: theme.FADE_BLACK,
    // flex: 1,
  },
  container: {
    backgroundColor: colors.black,
    marginHorizontal: 29,
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingHorizontal: 25,
    paddingVertical: 72,
    borderRadius: 17,
    alignItems: 'center',
  },
  buttonStyle: {
    width: '80%',
    marginBottom: 20,
  },
  buttonCancel: {
    backgroundColor: colors.toscaGreen,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonLogout: {
    backgroundColor: colors.danger,
    borderRadius: 10,
  },
  icon: {
    marginBottom: 10,
  },
});
