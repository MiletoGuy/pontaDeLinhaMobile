import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotaoSolicitacoes from './BotaoSolicitacoes.js';
import FuncaoVoltar from '../FuncaoVoltar.js';


export default function SolicitacoesScreen() {

  FuncaoVoltar("Solicitacoes");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.miniContainer}> 
        <BotaoSolicitacoes texto={'Nova Ficha'} imagem={require('./imagens/novaFicha.png')}/>
        <BotaoSolicitacoes texto={'Reportar Problema'} imagem={require('./imagens/reportarProblema.png')}/>
        <BotaoSolicitacoes texto={'Editar Ficha'} imagem={require('./imagens/editarFicha.png')}/>
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
  botaoArea: {
    margin: 5,
    borderRadius: 6,
    width: '43%',
    flexBasis: '46%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
  imagem: {
    width: '80%',
    height: '80%',
    resizeMode: 'center'
  }
})
