import React from 'react';
import { Alert, View, Text, StyleSheet, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailScreen() {
  const navigation = useNavigation();

  
  const backAction = () => {
    Alert.alert('Calma lá!', 'Tem certeza que você deseja sair?', [
      {
        text: 'Voltar',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Sim', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction,
  );

  const handleFichas = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Bem-vindo à tela Home!</Text>
      <View style={styles.miniContainer}>
        <Text style={styles.button} onPress={handleFichas}>Fichas</Text>
        <Text style={styles.button}>Pesquisa</Text>
        <Text style={styles.button}>Solicitações</Text>
        <Text style={styles.button}>Meus Dados</Text>
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
  button: {
    borderRadius: 6,
    margin: 5,
    width: '43%',
    flexBasis: '46%',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
})
