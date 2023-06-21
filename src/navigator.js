import React from 'react';
import { BackHandler, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './telas/LoginScreen';
import HomeScreen from './telas/home/HomeScreen';
import FichaScreen from './telas/ficha/FichaScreen';
import SolicitacoesScreen from './telas/solicitacoes/SolicitacoesScreen';
import PesquisaScreen from './telas/pesquisa/PesquisaScreen';
import PrimeiroAcessoScreen from './telas/primeiroAcesso/PrimeiroAcessoScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {


  const navigation = useNavigation();

  const handleBackButton = () => {
      const currentRoute = navigation.getCurrentRoute();

      if (currentRoute.name === 'Home') {
        Alert.alert('Calma aí', 'Tem certeza que deseja sair?', [
          {
            text: 'Voltar',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Sim', onPress: () => navigation.navigate('Login')},
        ]);
        return true
      }
      return false;
    
  };

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);
  
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Fichas" component={FichaScreen} />
      <Stack.Screen name="Solicitacoes" component={SolicitacoesScreen} />
      <Stack.Screen name="Pesquisa" component={PesquisaScreen} />
      <Stack.Screen name="PrimeiroAcesso" component={PrimeiroAcessoScreen} />
    </Stack.Navigator>
  );
}
