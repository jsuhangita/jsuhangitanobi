import React, {useState} from 'react';
import {Button, Container, Input} from '../../components';
import {Image} from '@rneui/themed';
import logo from '../../../assets/image/logo.png';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {colors} from '../../styles/theme.styles';
import {useForm} from 'react-hook-form';
import {emailRules, passwordRules} from '../../validation/auth.validation';
import {isEmpty} from 'lodash';

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [passwordSecure, updatePasswordSecure] = useState(true);

  const onSubmit = data => console.log(data);
  return (
    <Container>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode={'contain'} />
      </View>
      <Input
        control={control}
        name={'email'}
        label={'E-mail Address'}
        placeholder={'Enter E-mail Address'}
        errorMessage={errors?.email?.message}
        rules={emailRules}
      />
      <Input
        control={control}
        name={'password'}
        label={'Password'}
        placeholder={'Enter Password'}
        errorMessage={errors?.password?.message}
        secureTextEntry={passwordSecure}
        rightIcon={
          <TouchableOpacity
            hitSlop={10}
            onPress={() => {
              updatePasswordSecure(!passwordSecure);
            }}>
            <Icon
              name={passwordSecure ? 'eye-slash' : 'eye'}
              size={15}
              color={colors.fadeGrey}
              type="font-awesome"
            />
          </TouchableOpacity>
        }
        rules={passwordRules}
      />
      <Button
        title={'Login'}
        containerStyle={styles.buttonContainer}
        onPress={handleSubmit(onSubmit)}
        disabled={!isEmpty(errors)}
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
    marginBottom: 44,
  },
  buttonContainer: {
    marginHorizontal: 47,
    marginTop: '100%',
  },
});
