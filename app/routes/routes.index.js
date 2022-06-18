import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/Auth/Login.page';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../pages/Home/HomePage';
import {colors} from '../styles/theme.styles';
import {Image} from '@rneui/themed';
import homeLogo from '../../assets/image/TabLogo/home_logo.png';
import unfocusedHomeLogo from '../../assets/image/TabLogo/home_logo_unfocused.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AuthRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'LoginScreen'} component={LoginPage} />
    </Stack.Navigator>
  );
}

export function TabRoute() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.black, borderTopWidth: 0},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? homeLogo : unfocusedHomeLogo}
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
