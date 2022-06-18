import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoute} from './routes/routes.index';
import {useEffect, useState} from 'react';
import {initialSetup} from './request/auth.request';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

function RootNavigation() {
  const [loggedIn, updateLoggedIn] = useState(false);

  async function _initialSetup() {
    const {isLoggedIn} = await initialSetup();
    updateLoggedIn(isLoggedIn);
  }
  useEffect(() => {
    _initialSetup();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {loggedIn && <Stack.Screen name={'Auth'} component={AuthRoute} />}
      <Stack.Screen name={'Auth'} component={AuthRoute} />
    </Stack.Navigator>
  );
}
