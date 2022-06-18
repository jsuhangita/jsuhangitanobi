import React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../styles/theme.styles';

export default function ContainerComponent(props) {
  const {children} = props;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[colors.darkBlue, colors.black]}>
        <SafeAreaView>{children}</SafeAreaView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
