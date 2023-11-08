import React, { useState } from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import GetIp from './GetIp';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation();
  const route = 'http://' + GetIp() + ':3000/login'

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("userId", value);
    } catch (e) {
      console.error(e)
    }
  };

  const handleLogin = async () => {
    const data = {
      login: login,
      senha: senha
    }    

    try {
      const response = await axios.post(route, data)
      console.log(response.data)
      if (response.data.auth == true){
        setLogin('')
        setSenha('')

        const userId = response.data.userId
        storeData(userId.toString())

        navigation.navigate('Home')
      } else if (response.data.auth == false){
        Alert.alert('Ops, algo deu errado', 'Login ou senha incorretos', [
          {text: 'Voltar', onPress: () => {
            setSenha('')
            setLogin('')
          }},
        ]);
      }
    } catch (error) {
      console.error(error)
    }
  };

  const handlePrimeiroAcesso = () => {
    navigation.navigate('PrimeiroAcesso')
  }

  const handleEsqueceuSenha = () => {
    navigation.navigate('EsqueceuSenha')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.text}>Faça seu login</Text>
      <TextInput style={styles.input} placeholder='Usuário' onChangeText={text => setLogin(text)} value={login}/>
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={text => setSenha(text)} value={senha}/>
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
    backgroundColor: 'white',
  },
  text: {
    color: '#0077b6',
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 16,
    marginVertical: 5,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#0077b6',
    color: 'black'
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
  },
  container2: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text2: {
    color: '#0077b6'
  }

})
