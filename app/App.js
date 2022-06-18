import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoute, TabRoute} from './routes/routes.index';
import SplashScreenPage from './pages/SplashScreen.page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Splash'} component={SplashScreenPage} />
      <Stack.Screen name={'Auth'} component={AuthRoute} />
      <Stack.Screen name={'Tab'} component={TabRoute} />
    </Stack.Navigator>
  );
}
