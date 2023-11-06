import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotaoSolicitacoes from './BotaoSolicitacoes.js';
import FuncaoVoltar from '../FuncaoVoltar.js';


export default function SolicitacoesScreen() {

  FuncaoVoltar("Solicitacoes");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.linha}>
        <BotaoSolicitacoes texto={'Nova Ficha'} imagem={require('./imagens/novaFicha.png')} />
        <BotaoSolicitacoes texto={'Reportar Problema'} imagem={require('./imagens/reportarProblema.png')} />
      </View>
      <View style={styles.linha}>
        <BotaoSolicitacoes texto={'Editar Ficha'} imagem={require('./imagens/editarFicha.png')} />
        <BotaoSolicitacoes texto={'Outras Solicitações'} imagem={require('./imagens/outrasSolicitacoes.png')} />
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
