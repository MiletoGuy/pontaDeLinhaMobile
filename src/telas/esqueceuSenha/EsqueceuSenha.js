import React, { useState } from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function EsqueceuSenhaScreen() {
  const [cpf, setCpf] = useState('')
  const navigation = useNavigation();

  const handleCadastrar = () => {
        Alert.alert('Recuperação de Senha', 'Um e-mail de recuperação foi enviado para sua caixa de entrada', [
            {text: 'Ir para o Login', onPress: () => navigation.navigate('Login')},
            ]);
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.text}>Informe seu CPF</Text>
      <TextInput style={styles.input} placeholder='CPF' keyboardType='numeric' onChangeText={text => setCpf(text)} value={cpf}/>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={handleCadastrar}>Confirmar</Text>
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
