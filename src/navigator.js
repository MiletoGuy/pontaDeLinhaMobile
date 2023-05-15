import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './telas/LoginScreen';
import HomeScreen from './telas/home/HomeScreen';
import FichaScreen from './telas/ficha/FichaScreen';
import SolicitacoesScreen from './telas/solicitacoes/SolicitacoesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Ficha" component={FichaScreen} />
      <Stack.Screen name="Solicitacoes" component={SolicitacoesScreen} />
    </Stack.Navigator>
  );
}
