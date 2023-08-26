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
import NovaFichaScreen from './telas/novaFicha/NovaFicha';
import EsqueceuSenhaScreen from './telas/esqueceuSenha/EsqueceuSenha';
import MeusDadosScreen from './telas/meusDados/MeusdadosScreen';
import ReportarProblemaScreen from './telas/reportarProblema/ReportarProblema.Screen';
import OutrasSolicitacoesScreen from './telas/outrasSolicitacoes/OutrasSolicitacoesScreen';
import EditarFichaScreen from './telas/editarFicha/EditarFicha';
import FichaSelecionadaScreen from './telas/editarFicha/FichaSelecionada';

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
      <Stack.Screen name="Ficha" component={FichaScreen} />
      <Stack.Screen name="Solicitacoes" component={SolicitacoesScreen} />
      <Stack.Screen name="Pesquisa" component={PesquisaScreen} />
      <Stack.Screen name="PrimeiroAcesso" component={PrimeiroAcessoScreen} />
      <Stack.Screen name="NovaFicha" component={NovaFichaScreen} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreen} />
      <Stack.Screen name="MeusDados" component={MeusDadosScreen} />
      <Stack.Screen name="ReportarProblema" component={ReportarProblemaScreen} />
      <Stack.Screen name="OutrasSolicitacoes" component={OutrasSolicitacoesScreen} />
      <Stack.Screen name="EditarFicha" component={EditarFichaScreen} />
      <Stack.Screen name="FichaSelecionada" component={FichaSelecionadaScreen} />
    </Stack.Navigator>
  );
}
