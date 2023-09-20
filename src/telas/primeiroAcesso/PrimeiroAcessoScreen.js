import React, { useState } from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios'

export default function PrimeiroAcessoScreen() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation();

  const handleCadastrar = async () => {
    const data = {
        nome_completo: nome,
        cpf: cpf,
        nivel_acesso: 'Nível 1',
        login: login,
        senha: senha
      }
  
      try {
        const response = await axios.post('http://192.168.0.138:3000/usuarios', data)
        console.log(response.data)
        if (response.data.success == true) {
            setNome('')
            setCpf('')
            setLogin('')
            setSenha('')
            Alert.alert('Tudo certo até agora', 'Seu cadastro foi um sucesso!', [
                {text: 'Ir para o Login', onPress: () => navigation.navigate('Login')},
              ]);
        }
      } catch (error) {
        console.error(error)
        
      }
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.text}>Preencha seus dados</Text>
      <TextInput style={styles.input} placeholder='Nome Completo' onChangeText={text => setNome(text)} value={nome}/>
      <TextInput style={styles.input} placeholder='CPF' keyboardType='numeric' onChangeText={text => setCpf(text)} value={cpf}/>
      <TextInput style={styles.input} placeholder='Login' onChangeText={text => setLogin(text)} value={login}/>
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} onChangeText={text => setSenha(text)} value={senha}/>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={handleCadastrar}>Cadastrar</Text>
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
