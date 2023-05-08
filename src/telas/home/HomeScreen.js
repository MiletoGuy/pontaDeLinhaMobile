import React from 'react';
import { Alert, View, StyleSheet, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotaoHome from './BotaoHome.js';

export default function HomeScreen() {
  const navigation = useNavigation();

  
  const backAction = () => {
    Alert.alert('Calma lá!', 'Tem certeza que você deseja sair?', [
      {
        text: 'Voltar',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => navigation.navigate('Login')},
    ]);
    return true;
  };
  
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction,
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.miniContainer}> 
        <BotaoHome texto={'Fichas'} imagem={require('./imagens/fichas.png')}/>
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
