import React from 'react';
import {Container} from '../../components';
import {Image} from '@rneui/themed';
import logo from '../../assets/image/logo.png';
import {StyleSheet, View} from 'react-native';

export default function LoginPage() {
  return (
    <Container>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode={'contain'} />
      </View>
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
});
