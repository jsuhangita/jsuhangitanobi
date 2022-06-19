import React, {useEffect, useState} from 'react';
import {Button, Container, Text} from '../../components';
import {errorHandler} from '../../util/helper.util';
import {fetchDashboard} from '../../request/home.request';
import bannerImage from '../../../assets/image/banner.png';
import {Image} from '@rneui/themed';
import {Modal, StyleSheet} from 'react-native';
import {colors, fontStyleBold} from '../../styles/theme.styles';
import {Icon, Overlay} from '@rneui/base';
import LogOutConfirmationComponent from '../../components/LogoutConfirmation/LogOutConfirmation.component';
import {clearAppConfig} from '../../request/auth.request';

export default function HomePage({navigation}) {
  const [dashboard, updateDashboard] = useState({});
  const [modalVisible, updateModalVisible] = useState(false);
  const [logoutVisible, updateLogoutVisible] = useState(false);

  async function _getData() {
    try {
      const res = await fetchDashboard();
      updateDashboard(res);
    } catch (e) {
      errorHandler(e);
    }
  }

  function _onPressLogout() {
    clearAppConfig();
    navigation.replace('Auth');
  }

  useEffect(() => {
    _getData().then();
  }, []);
  const {total_asset} = dashboard;
  return (
    <Container>
      <Image
        source={bannerImage}
        style={styles.bannerStyle}
        containerStyle={styles.bannerContainerStyle}
        resizeMode={'contain'}
      />
      <Text center color={colors.fadeGrey} style={styles.changesText}>
        24 H Changes{' '}
        {/*Strange naming variable 24hourchange syntax error if destructured*/}
        <Text color={colors.toscaGreen}>+{dashboard['24hourchange']} %</Text>
      </Text>
      <Text center large bold>
        $ {total_asset}
      </Text>
      <Button
        onPress={() => {
          updateModalVisible(true);
          setTimeout(() => {
            updateModalVisible(false);
          }, 5000);
        }}
        title={'Deposit'}
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        icon={
          <Icon
            name={'download'}
            type={'feather'}
            color={colors.white}
            style={styles.icon}
          />
        }
      />
      <Button
        onPress={() => {
          updateLogoutVisible(true);
        }}
        title={'Log-out'}
        containerStyle={[styles.buttonContainerStyle]}
        buttonStyle={styles.buttonLogout}
        titleStyle={styles.buttonText}
        icon={
          <Icon
            name={'log-out'}
            type={'feather'}
            color={colors.white}
            style={styles.icon}
          />
        }
      />
      <Overlay isVisible={modalVisible} overlayStyle={styles.overlayStyle} />
      <Overlay
        animationType={'fade'}
        isVisible={logoutVisible}
        overlayStyle={styles.overlayStyle}>
        <LogOutConfirmationComponent
          onPressCancel={() => {
            updateLogoutVisible(false);
          }}
          onPressLogout={_onPressLogout}
        />
      </Overlay>
    </Container>
  );
}

const styles = StyleSheet.create({
  bannerStyle: {
    width: 329,
    height: 72,
  },
  bannerContainerStyle: {
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 28,
  },
  changesText: {
    marginBottom: 8,
  },
  buttonContainerStyle: {
    marginHorizontal: 48,
    marginTop: 37,
  },
  button: {
    backgroundColor: colors.toscaGreen,
    borderRadius: 10,
  },
  buttonLogout: {
    backgroundColor: colors.danger,
    borderRadius: 10,
  },
  buttonText: {
    ...fontStyleBold,
  },
  icon: {
    marginRight: 10,
  },
  overlayStyle: {
    backgroundColor: 'transparent',
  },
});
