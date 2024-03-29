import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, Pressable, Alert } from 'react-native';
import ValidaCPF from '../ValidaCPF';
import GetIp from '../GetIp';
import {TextInputMask} from 'react-native-masked-text'

export default function NovaFichaScreen() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const navigator = useNavigation()
    const route = 'http://' + GetIp() + ':3000/fichas'


    const data = {
        nome_completo: nome,
        cpf: cpf.replace(/\D+/g, "")
    }

    const handlePress = () => {
      if (ValidaCPF(cpf)) {
        handleCadastrar();
      } else {
        Alert.alert('CPF inválido', 'Confira se o cpf informado foi digitado corretamente', [
          {
            text: 'Voltar',
            onPress: () => null,
            style: 'cancel',
          }
        ]);
      }
    }

    const handleCadastrar = async () => {
        try {
            const response = await axios.post(route, data)
            console.log(response.data)
            if (response.data.success == true) {
                setNome('')
                setCpf('')
                Alert.alert('Perfeito', 'Nova ficha cadastrada com sucesso!', [
                    {text: 'OK', onPress: () => navigator.navigate('NovaFicha')},
                  ]);
            }
          } catch (error) {
            console.error(error)
          }
    }


  

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>
        <TextInput style={style.input} placeholder='Nome Completo' placeholderTextColor={'gray'} value={nome} onChangeText={(text) => setNome(text)}/>
        <TextInputMask type='cpf' style={style.input} placeholder='CPF' placeholderTextColor={'gray'} keyboardType='numeric' value={cpf} onChangeText={(text) => setCpf(text)}/>
        <Pressable style={style.button} onPress={handlePress}>
            <Text style={style.buttonText}>Cadastrar</Text>
        </Pressable>
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
      input: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#0077b6',
        padding: 5
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#0077b6',
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      
})
