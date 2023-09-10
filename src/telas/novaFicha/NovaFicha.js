import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, Pressable, Alert } from 'react-native';
import ValidaCPF from '../ValidaCPF';

export default function NovaFichaScreen() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const navigator = useNavigation()

    const data = {
        nome_completo: nome,
        cpf: cpf
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
            const response = await axios.post('http://192.168.0.138:3000/fichas', data)
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
        <TextInput style={style.input} placeholder='CPF' placeholderTextColor={'gray'} keyboardType='numeric' value={cpf} onChangeText={(text) => setCpf(text)}/>
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
        backgroundColor: 'black',
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
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlignVertical: 'bottom'
      },
      input: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        padding: 5
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
      
})
