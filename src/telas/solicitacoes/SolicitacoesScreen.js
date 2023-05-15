import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import BotaoSolicitacoes from './BotaoSolicitacoes';

export default function SolicitacoesScreen() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.miniContainer}> 
      <BotaoSolicitacoes texto={'Nova Ficha'} imagem={require('./imagens/novaFicha.png')}/>
      <BotaoSolicitacoes texto={'Reportar Problema'} imagem={require('./imagens/reportar.png')}/>
      <BotaoSolicitacoes texto={'Editar Ficha'} imagem={require('./imagens/editar.png')}/>
      <BotaoSolicitacoes texto={'Outras Solicitações'} imagem={require('./imagens/outrasSolicitacoes.png')}/>
      </View> 
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  miniContainer: {
    alignContent: 'center',
    width: '80%',
    height: '50%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  texto: {
    color: 'white'
  }

})
