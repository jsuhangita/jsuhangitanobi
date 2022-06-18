import React from 'react';
import {Container, Input} from '../../components';
import {Image} from '@rneui/themed';
import logo from '../../../assets/image/logo.png';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {colors} from '../../styles/theme.styles';

export default function LoginPage() {
  return (
    <Container>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode={'contain'} />
      </View>
      <Input
        label={'E-mail Address'}
        placeholder={'Enter E-mail Address'}
        errorMessage={'Invalid E-mail Address'}
      />
      <Input
        label={'Password'}
        placeholder={'Enter Password'}
        errorMessage={'Invalid Password'}
        secureTextEntry={true}
        rightIcon={
          <TouchableOpacity style={styles.iconContainer}>
            <Icon
              name="eye-slash"
              size={15}
              color={colors.fadeGrey}
              type="font-awesome"
            />
          </TouchableOpacity>
        }
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 22,
  },
  iconContainer: {
    width: 40,
  },
});
