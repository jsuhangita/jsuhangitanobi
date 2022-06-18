import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoute} from './routes/routes.index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Transaction />
    </NavigationContainer>
  );
}

function Transaction() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Auth'} component={AuthRoute} />
    </Stack.Navigator>
  );
}
