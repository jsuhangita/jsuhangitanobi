import React, {useEffect, useState} from 'react';
import {Container} from '../components';
import {initialSetup} from '../request/auth.request';

export default function SplashScreenPage({navigation}) {
  async function _initialSetup() {
    const {isLoggedIn} = await initialSetup();
    if (isLoggedIn) {
      navigation.replace('Tab');
    } else {
      navigation.replace('Auth');
    }
  }
  useEffect(() => {
    _initialSetup().then();
  }, []);
  return <Container />;
}
