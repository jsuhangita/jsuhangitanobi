import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/Auth/Login.page';

const Stack = createStackNavigator();

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
