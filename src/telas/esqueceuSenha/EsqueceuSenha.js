import React, { useState } from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInputMask } from 'react-native-masked-text';
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
      <TextInputMask type='cpf' style={styles.input} placeholder='CPF' keyboardType='numeric' onChangeText={text => setCpf(text)} value={cpf}/>
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
    backgroundColor: 'white',
  },
  text: {
    color: '#0077b6',
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
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#0077b6'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0077b6',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }

})
