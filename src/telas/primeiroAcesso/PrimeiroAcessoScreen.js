import React, { useState } from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import GetIp from '../GetIp';
import { TextInputMask } from 'react-native-masked-text'
import ValidaCPF from '../ValidaCPF';

export default function PrimeiroAcessoScreen() {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation();
  const route = 'http://' + GetIp() + ':3000/usuarios'

  const handleCadastrar = async () => {
    const data = {
      nome_completo: nome,
      cpf: cpf.replace(/\D+/g, ""),
      nivel_acesso: 'Nível 1',
      login: login,
      senha: senha
    }

    if (cpf == '' || nome == '' || login == '' || senha == '') {
      Alert.alert('Dados inválidos', 'Preencha todos os campos para realizar o seu cadastro', [
        { text: 'Voltar', },
      ])
    } else if (!ValidaCPF(cpf)) {
      Alert.alert('CPF inválido', 'Confira seu CPF e digite novamente', [
        { text: 'Voltar', },
      ])
    } else {
      try {
        const response = await axios.post(route, data)
        if (response.data.success == true) {
          setNome('')
          setCpf('')
          setLogin('')
          setSenha('')
          Alert.alert('Tudo certo até agora', 'Seu cadastro foi um sucesso!', [
            { text: 'Ir para o Login', onPress: () => navigation.navigate('Login') },
          ])
        }
      } catch (error) {
        console.error(error)

      }
    }
  }




  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.text}>Preencha seus dados</Text>
      <TextInput style={styles.input} placeholder='Nome Completo' onChangeText={text => setNome(text)} value={nome} />
      <TextInputMask type='cpf' style={styles.input} placeholder='CPF' keyboardType='numeric' onChangeText={text => setCpf(text)} value={cpf} />
      <TextInput style={styles.input} placeholder='Login' onChangeText={text => setLogin(text)} value={login} />
      <TextInput style={styles.input} placeholder='Senha' onChangeText={text => setSenha(text)} secureTextEntry={true} value={senha} />
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
