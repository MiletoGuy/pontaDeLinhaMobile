import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotaoHome from './BotaoHome.js';
import FuncaoVoltar from '../FuncaoVoltar.js';


export default function HomeScreen() {

  FuncaoVoltar("Home");
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.linha}>
          <BotaoHome texto={'Ficha'} imagem={require('./imagens/fichas.png')} />
          <BotaoHome texto={'Pesquisa'} imagem={require('./imagens/pesquisa.png')} />
        </View>
        <View style={styles.linha}>
          <BotaoHome texto={'Solicitações'} imagem={require('./imagens/solicitacoes.png')} />
          <BotaoHome texto={'Meus Dados'} imagem={require('./imagens/meusDados.png')} />
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
  linha: {
    height: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
