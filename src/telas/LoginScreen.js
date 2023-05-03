import React from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handlePrimeiroAcesso = () => {
    Alert.alert('Alerta', 'Primeiro Acesso', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ])
  }

  const handleEsqueceuSenha = () => {
    alert('esqueceu senha')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.text}>Faça seu login</Text>
      <TextInput style={styles.input} placeholder='Usuário'/>
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true}/>
      <Pressable style={styles.container2}>
        <Text style={styles.text2} onPress={handlePrimeiroAcesso}>Primeiro Acesso?</Text>
        <Text style={styles.text2} onPress={handleEsqueceuSenha}>Esqueceu a Senha?</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
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
  text: {
    color: 'white',
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    fontSize: 16,
    marginVertical: 5,
    borderRadius: 4
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  container2: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  text2: {
    color: 'white'
  }

})
