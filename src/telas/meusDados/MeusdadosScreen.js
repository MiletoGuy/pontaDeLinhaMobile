import React, { useEffect }  from 'react';
import { StyleSheet, SafeAreaView, TextInput, View } from 'react-native';
import GetIp from '../GetIp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useState } from 'react';

export default function MeusDadosScreen() {
  useEffect(() => {
    getData()
  }, [])

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [acesso, setAcesso] = useState('')
  const [login, setLogin] = useState('')

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userId");
      if (value !== null) {
        fetchUsuario(value)
      }
    } catch (e) {
      console.error('erro ao pegar usuario',e)
    }
  };



  const fetchUsuario = async (id) => {
    try {
      const route = 'http://' + GetIp() + ':3000/usuarios/' + id
      console.log(route)
      const response = await axios.get(route)
      setNome(response.data.nome_completo)
      setCpf(formatarCPF(response.data.cpf))
      setAcesso(response.data.nivel_acesso)
      setLogin(response.data.login)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const formatarCPF = (c) => {
    c = c.replace(/\D/g, '');
    c = c.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    return c
}

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>

        <TextInput style={style.input} placeholder='Nome Completo' placeholderTextColor={'gray'} editable={false} value={'Nome: ' + nome}/>
        <TextInput style={style.input} placeholder='CPF' placeholderTextColor={'gray'} editable={false} value={'CPF: ' + cpf}/>
        <TextInput style={style.input} placeholder='Nível de Acesso' placeholderTextColor={'gray'} editable={false} value={'Acesso: ' + acesso}/>
        <TextInput style={style.input} placeholder='Login' placeholderTextColor={'gray'} editable={false} value={'Login: ' + login}/>

      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between'
      },
      containerDados: {
        alignItems: 'center',
        width: '100%'
      },
      containerBotoes: {
        height: '20%',
        width: '80%',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      fichaID: {
        color: '#0077b6',
        fontSize: 32,
        fontWeight: 'bold',
        textAlignVertical: 'bottom'
      },
      input: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#0077b6',
        color: 'black',
        padding: 5
      },
      
})
