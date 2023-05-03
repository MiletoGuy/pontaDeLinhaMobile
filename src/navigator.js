import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './telas/LoginScreen';
import HomeScreen from './telas/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
