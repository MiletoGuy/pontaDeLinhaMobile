import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotaoHome from './BotaoHome.js';
import FuncaoVoltar from '../FuncaoVoltar.js';


export default function HomeScreen() {

  FuncaoVoltar("Home");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.miniContainer}> 
        <BotaoHome texto={'Ficha'} imagem={require('./imagens/fichas.png')}/>
        <BotaoHome texto={'Pesquisa'} imagem={require('./imagens/pesquisa.png')}/>
        <BotaoHome texto={'Solicitações'} imagem={require('./imagens/solicitacoes.png')}/>
        <BotaoHome texto={'Meus Dados'} imagem={require('./imagens/meusDados.png')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  miniContainer: {
    alignContent: 'center',
    width: '80%',
    height: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
})
